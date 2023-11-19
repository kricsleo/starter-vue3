import {
  defineConfig,
  presetIcons,
  presetUno,
} from 'unocss'
import presetRem2Px from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetRem2Px({ baseFontSize: 4 }), // 1rem === 4px
  ],
})
