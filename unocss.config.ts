import {
  defineConfig,
  presetIcons,
  presetWind4,
} from 'unocss'
import presetRem2Px from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetWind4(),
    presetIcons(),
    presetRem2Px({ baseFontSize: 4 }), // 1rem === 4px
  ],
})
