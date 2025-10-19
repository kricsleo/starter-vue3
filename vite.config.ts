import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `/src/`,
    },
  },
  plugins: [
    Vue(),
    Unocss(),
  ],
})
