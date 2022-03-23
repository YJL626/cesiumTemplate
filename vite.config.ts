import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@rollup/plugin-eslint'

import { join, posix, resolve } from 'path'
const { join: posixJoin, resolve: posixResolve } = posix
const cesiumSource = 'node_modules/cesium/Source',
  cesiumWorkers = '../Build/Cesium/Workers',
  cesiumAssetsBaseUrl = 'cesium'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint() as any],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
