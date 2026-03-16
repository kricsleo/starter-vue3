import { defineConfig, presetIcons, presetWind4 } from 'unocss'
import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { 
        theme: { 
          process: createRemToPxProcessor(), 
        } 
      }, 
    }),
    presetIcons(),
  ],
  postprocess: [createRemToPxProcessor()],
})
