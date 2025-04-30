/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    environment: 'jsdom'
  },
  server: {
    open: true,
    port: 3000,
  },

})