/**
 * Mentats CVAE Decoder Engine
 * Loads .rmlc model files and runs forward-pass inference in the browser.
 */

export interface LinearLayerData {
  outFeatures: number;
  inFeatures: number;
  weight: Float32Array; // row-major: [outFeatures, inFeatures]
  bias: Float32Array; // [outFeatures]
}

export type ActivationType = "relu" | "sigmoid" | "tanh" | "leaky_relu";

export interface ActivationLayerData {
  kind: ActivationType;
}

export type LayerData =
  | { type: "linear"; data: LinearLayerData }
  | { type: "activation"; data: ActivationLayerData };

export interface CvaeDecoderModel {
  layerCount: number;
  layers: LayerData[];
  latentDim: number;
  labelDim: number;
  outputDim: number;
}

const TAG_LINEAR = 0;
const TAG_ACTIVATION = 1;

const ACT_RELU = 0;
const ACT_SIGMOID = 1;
const ACT_TANH = 2;
const ACT_LEAKY_RELU = 3;

/**
 * Parses an .rmlc file from an ArrayBuffer
 */
export function parseRmlcModel(buffer: ArrayBuffer): CvaeDecoderModel {
  const view = new DataView(buffer);
  let offset = 0;

  function readU32(): number {
    const val = view.getUint32(offset, true);
    offset += 4;
    return val;
  }

  function readU8(): number {
    const val = view.getUint8(offset);
    offset += 1;
    return val;
  }

  function readF32(): number {
    const val = view.getFloat32(offset, true);
    offset += 4;
    return val;
  }

  function readTensor(): { shape: number[]; data: Float32Array } {
    const ndim = readU32();
    const shape: number[] = [];
    let totalLen = 1;
    for (let i = 0; i < ndim; i++) {
      const dim = readU32();
      shape.push(dim);
      totalLen *= dim;
    }

    const data = new Float32Array(totalLen);
    for (let i = 0; i < totalLen; i++) {
      data[i] = readF32();
    }
    return { shape, data };
  }

  const layerCount = readU32();
  const layers: LayerData[] = [];

  for (let l = 0; l < layerCount; l++) {
    const tag = readU8();
    if (tag === TAG_LINEAR) {
      const weightTensor = readTensor();
      const biasTensor = readTensor();

      const outFeatures = weightTensor.shape[0];
      const inFeatures = weightTensor.shape[1];

      layers.push({
        type: "linear",
        data: {
          outFeatures,
          inFeatures,
          weight: weightTensor.data,
          bias: biasTensor.data,
        },
      });
    } else if (tag === TAG_ACTIVATION) {
      const actId = readU8();
      let kind: ActivationType = "relu";
      if (actId === ACT_SIGMOID) kind = "sigmoid";
      else if (actId === ACT_TANH) kind = "tanh";
      else if (actId === ACT_LEAKY_RELU) kind = "leaky_relu";

      layers.push({
        type: "activation",
        data: { kind },
      });
    } else {
      throw new Error(`Unsupported layer tag in .rmlc: ${tag}`);
    }
  }

  return {
    layerCount,
    layers,
    latentDim: 32,
    labelDim: 10,
    outputDim: 784,
  };
}

/**
 * Loads the CVAE decoder from a URL or static asset path
 */
let cachedModel: CvaeDecoderModel | null = null;

export async function loadCvaeModel(
  url: string = "/models/cvae_decoder.rmlc",
): Promise<CvaeDecoderModel> {
  if (cachedModel) return cachedModel;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to load model from ${url}: HTTP ${res.status} ${res.statusText}`,
    );
  }
  const buffer = await res.arrayBuffer();
  const model = parseRmlcModel(buffer);
  cachedModel = model;
  return model;
}

/**
 * Generates standard normal random vector z ~ N(0, I) using Box-Muller transform
 */
export function sampleStandardNormal(dim: number = 32): Float32Array {
  const z = new Float32Array(dim);
  for (let i = 0; i < dim; i += 2) {
    let u1 = Math.random();
    let u2 = Math.random();
    while (u1 <= 1e-7) u1 = Math.random();
    const mag = Math.sqrt(-2.0 * Math.log(u1));
    z[i] = mag * Math.cos(2.0 * Math.PI * u2);
    if (i + 1 < dim) {
      z[i + 1] = mag * Math.sin(2.0 * Math.PI * u2);
    }
  }
  return z;
}

/**
 * Linear interpolation between two vectors: (1 - t) * a + t * b
 */
export function interpolateVectors(
  a: Float32Array,
  b: Float32Array,
  t: number,
): Float32Array {
  const len = Math.min(a.length, b.length);
  const out = new Float32Array(len);
  const oneMinusT = 1.0 - t;
  for (let i = 0; i < len; i++) {
    out[i] = oneMinusT * a[i] + t * b[i];
  }
  return out;
}

/**
 * Runs the CVAE decoder forward pass.
 * Input:
 *   - z: Float32Array(32) latent vector
 *   - classCondition: either a digit integer (0-9) or a 10-element one-hot / interpolated distribution
 * Output:
 *   - Float32Array(784) pixel intensities in range [0.0, 1.0] (Sigmoid applied)
 */
export function evaluateCvaeDecoder(
  model: CvaeDecoderModel,
  z: Float32Array,
  classCondition: number | Float32Array,
): { pixels: Float32Array; inferenceTimeMs: number } {
  const startTime = typeof performance !== "undefined" ? performance.now() : 0;

  // Build one-hot / condition vector of length 10
  const y = new Float32Array(10);
  if (typeof classCondition === "number") {
    const classIdx = Math.max(0, Math.min(9, Math.floor(classCondition)));
    y[classIdx] = 1.0;
  } else {
    for (let i = 0; i < Math.min(10, classCondition.length); i++) {
      y[i] = classCondition[i];
    }
  }

  // Concatenate z (32) + y (10) = 42 features
  const inputDim = model.latentDim + model.labelDim;
  let current = new Float32Array(inputDim);
  for (let i = 0; i < model.latentDim; i++) {
    current[i] = z[i] ?? 0;
  }
  for (let i = 0; i < model.labelDim; i++) {
    current[model.latentDim + i] = y[i];
  }

  // Forward through all layers in the decoder
  for (const layer of model.layers) {
    if (layer.type === "linear") {
      const { outFeatures, inFeatures, weight, bias } = layer.data;
      const next = new Float32Array(outFeatures);

      for (let o = 0; o < outFeatures; o++) {
        let sum = bias[o];
        const rowOffset = o * inFeatures;
        for (let i = 0; i < inFeatures; i++) {
          sum += weight[rowOffset + i] * current[i];
        }
        next[o] = sum;
      }
      current = next;
    } else if (layer.type === "activation") {
      const { kind } = layer.data;
      const len = current.length;
      if (kind === "relu") {
        for (let i = 0; i < len; i++) {
          if (current[i] < 0) current[i] = 0;
        }
      } else if (kind === "sigmoid") {
        for (let i = 0; i < len; i++) {
          current[i] = 1.0 / (1.0 + Math.exp(-current[i]));
        }
      } else if (kind === "tanh") {
        for (let i = 0; i < len; i++) {
          current[i] = Math.tanh(current[i]);
        }
      } else if (kind === "leaky_relu") {
        for (let i = 0; i < len; i++) {
          if (current[i] < 0) current[i] = 0.01 * current[i];
        }
      }
    }
  }

  // Apply final Sigmoid activation to convert output logits to [0.0, 1.0] pixel probabilities
  const pixels = new Float32Array(current.length);
  for (let i = 0; i < current.length; i++) {
    pixels[i] = 1.0 / (1.0 + Math.exp(-current[i]));
  }

  const endTime = typeof performance !== "undefined" ? performance.now() : 0;

  return {
    pixels,
    inferenceTimeMs: Math.max(0.01, endTime - startTime),
  };
}
