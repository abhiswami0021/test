// Centralized Theme Configuration
export const theme = {
  // Color Palette
  colors: {
    primary: {
      DEFAULT: '#000000',
      light: '#1a1a1a',
      dark: '#000000',
    },
    secondary: {
      DEFAULT: '#374151',
      light: '#6b7280',
      dark: '#1f2937',
    },
    accent: {
      DEFAULT: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
    },
    text: {
      primary: '#000000',
      secondary: '#4b5563',
      tertiary: '#6b7280',
      light: '#9ca3af',
    },
    border: {
      DEFAULT: '#e5e7eb',
      light: '#f3f4f6',
      dark: '#d1d5db',
    },
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "'Inter', system-ui, -apple-system, sans-serif",
      heading: "'Inter', system-ui, -apple-system, sans-serif",
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
    },
    fontWeight: {
      normal: '400',
      medium: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  // Spacing Scale (8px base)
  spacing: {
    0: '0',
    1: '0.5rem',    // 8px
    2: '1rem',      // 16px
    3: '1.5rem',    // 24px
    4: '2rem',      // 32px
    5: '2.5rem',    // 40px
    6: '3rem',      // 48px
    8: '4rem',      // 64px
    10: '5rem',     // 80px
    12: '6rem',     // 96px
    16: '8rem',     // 128px
    20: '10rem',    // 160px
    24: '12rem',    // 192px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    DEFAULT: '0.375rem', // 6px
    md: '0.5rem',     // 8px
    lg: '0.75rem',    // 12px
    xl: '1rem',       // 16px
    '2xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    none: 'none',
  },

  // Transitions
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },

  // Z-index layers
  zIndex: {
    dropdown: 40,
    overlay: 40,
    modal: 50,
    toast: 60,
  },

  // Breakpoints (for reference)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type Theme = typeof theme;
