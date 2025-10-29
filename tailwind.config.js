import { theme } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        bg: theme.colors.background,
      },
      fontFamily: {
        sans: [theme.typography.fontFamily.primary],
        heading: [theme.typography.fontFamily.heading],
      },
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeight,
      lineHeight: theme.typography.lineHeight,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.shadows,
      transitionDuration: theme.transitions.duration,
      transitionTimingFunction: theme.transitions.timing,
      zIndex: theme.zIndex,
    },
  },
  plugins: [],
};
