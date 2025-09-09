import { createTamagui } from '@tamagui/core'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
// import { createMedia } from '@tamagui/responsive-media'

const headingFont = createInterFont()
const bodyFont = createInterFont()

// footballLOG custom theme
const customTokens = {
  ...tokens,
  color: {
    ...tokens.color,
    footballGreen: '#059669',
    footballGreenLight: '#10b981',
    footballGreenDark: '#047857',
    footballAccent: '#22c55e',
    footballBg: '#f0fdf4',
  }
}

const customThemes = {
  ...themes,
  light: {
    ...themes.light,
    primary: customTokens.color.footballGreen,
    primaryLight: customTokens.color.footballGreenLight,
    primaryDark: customTokens.color.footballGreenDark,
    accent: customTokens.color.footballAccent,
    background: customTokens.color.footballBg,
  },
  dark: {
    ...themes.dark,
    primary: customTokens.color.footballGreenLight,
    primaryLight: customTokens.color.footballGreen,
    primaryDark: customTokens.color.footballGreenDark,
    accent: customTokens.color.footballAccent,
    background: '#0f172a',
  }
}

export const config = createTamagui({
  animations: {},
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: customThemes,
  tokens: customTokens,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

export type AppConfig = typeof config

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}