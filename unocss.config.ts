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
      'px-4 py-2 font-medium text-sm tracking-wide text-white capitalize transition-colors transform bg-sky-400 rounded-md border-none no-underline hover:bg-sky-500 focus:( outline-none ring ring-teal-300 ring-opacity-80 )',
    ],
    [
      'icon-btn',
      'hover:text-primary inline-block select-none border-none opacity-75 transition duration-200 ease-in-out hover:opacity-100',
    ],
    ['nav-link', 'rounded-lg flex px-2 py-3 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'],
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
      provider: 'bunny',
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
