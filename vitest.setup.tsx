import '@testing-library/jest-dom'

// Mock IntersectionObserver for Framer Motion
class MockIntersectionObserver {
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
})

// Mock ResizeObserver for NetworkBackground
class MockResizeObserver {
  observe = () => {}
  unobserve = () => {}
  disconnect = () => {}
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
})

// Mock HTMLCanvasElement getContext
HTMLCanvasElement.prototype.getContext = (() => {
  return {
    fillRect: () => {},
    clearRect: () => {},
    getImageData: () => ({ data: [] }),
    putImageData: () => {},
    createImageData: () => [],
    setTransform: () => {},
    drawImage: () => {},
    save: () => {},
    fillText: () => {},
    restore: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    stroke: () => {},
    translate: () => {},
    scale: () => {},
    rotate: () => {},
    arc: () => {},
    fill: () => {},
  } as unknown as CanvasRenderingContext2D
}) as unknown as typeof HTMLCanvasElement.prototype.getContext