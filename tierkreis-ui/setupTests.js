import '@testing-library/jest-dom'

// Polyfill for resize observer since we are not in a browser environment.
global.ResizeObserver = require('resize-observer-polyfill')
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  disconnect() {
    return null
  }

  observe() {
    return null
  }

  takeRecords() {
    return null
  }

  unobserve() {
    return null
  }
}
