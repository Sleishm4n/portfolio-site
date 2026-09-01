import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import {
  parseRmlcModel,
  evaluateCvaeDecoder,
  sampleStandardNormal,
} from "../lib/cvae-engine";

describe("Mentats CVAE Engine", () => {
  it("loads and parses cvae_decoder.rmlc checkpoint", () => {
    const filePath = path.resolve(
      __dirname,
      "../public/models/cvae_decoder.rmlc",
    );
    const buffer = fs.readFileSync(filePath);
    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    );

    const model = parseRmlcModel(arrayBuffer);
    expect(model.layerCount).toBe(5);
    expect(model.layers.length).toBe(5);

    // Layer 0: Linear(42, 256)
    expect(model.layers[0].type).toBe("linear");
    if (model.layers[0].type === "linear") {
      expect(model.layers[0].data.inFeatures).toBe(42);
      expect(model.layers[0].data.outFeatures).toBe(256);
      expect(model.layers[0].data.weight.length).toBe(256 * 42);
      expect(model.layers[0].data.bias.length).toBe(256);
    }

    // Layer 1: ReLU
    expect(model.layers[1].type).toBe("activation");

    // Layer 2: Linear(256, 512)
    expect(model.layers[2].type).toBe("linear");
    if (model.layers[2].type === "linear") {
      expect(model.layers[2].data.inFeatures).toBe(256);
      expect(model.layers[2].data.outFeatures).toBe(512);
    }

    // Layer 3: ReLU
    expect(model.layers[3].type).toBe("activation");

    // Layer 4: Linear(512, 784)
    expect(model.layers[4].type).toBe("linear");
    if (model.layers[4].type === "linear") {
      expect(model.layers[4].data.inFeatures).toBe(512);
      expect(model.layers[4].data.outFeatures).toBe(784);
    }

    // Run a forward pass
    const z = sampleStandardNormal(32);
    const { pixels, inferenceTimeMs } = evaluateCvaeDecoder(model, z, 7);

    expect(pixels.length).toBe(784);
    expect(inferenceTimeMs).toBeGreaterThanOrEqual(0);
    // Values should be in range [0, 1]
    for (let i = 0; i < pixels.length; i++) {
      expect(pixels[i]).toBeGreaterThanOrEqual(0);
      expect(pixels[i]).toBeLessThanOrEqual(1);
    }
  });
});
