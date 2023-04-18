import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
/* @unocss-include */

export default defineConfig({

  shortcuts: [
    [
      'btn',
      'px-22 py-2 font-medium text-xl tracking-wide text-white rounded-xl border-none no-underline shadow-md',
    ],
    [
      'icon-btn',
      'hover:text-primary inline-block select-none border-none opacity-75 transition duration-200 ease-in-out hover:opacity-100',
    ],
    ['nav-link', 'flex px-6 py-3 transition text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'],
    ['list', 'list-disc list-inside'],
    ['flex-center', 'flex items-center justify-center'],
    ['grid-center', 'grid place-items-center'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: 'Inter',
        text: 'Inter',
        mono: 'JetBrains Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c])
          return { color: theme.colors[c] }
      },
    ],
  ],
  theme: {
    colors: {
      base: 'rgb(var(--base))',
      base_light: 'rgb(var(--base-light))',
      primary: 'rgb(var(--primary))',
      secondary: 'rgb(var(--secondary))',
    },
  },
})
