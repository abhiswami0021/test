# Theme Configuration Guide

This project uses a centralized theme system that allows you to update all visual styling from a single location.

## Theme Location

The main theme configuration is located at: **`src/theme.ts`**

## What's Included

The theme file defines:

- **Colors**: Primary, secondary, accent, background, text, border colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: An 8px-based spacing scale
- **Border Radius**: Various corner radius options
- **Shadows**: Predefined shadow depths
- **Transitions**: Duration and timing functions
- **Z-Index**: Layer management for overlays and modals
- **Breakpoints**: Responsive design breakpoints

## How to Use

### In Tailwind Classes

The theme is automatically integrated with Tailwind CSS. Use theme values in your components like this:

```tsx
// Colors
<div className="bg-primary text-white">
<div className="bg-secondary text-text-primary">
<div className="border border-border">

// Typography
<h1 className="font-bold text-5xl">
<p className="font-normal text-base">

// Spacing (using extended values)
<div className="p-4 m-2 space-y-3">

// Border Radius
<div className="rounded-lg">
<div className="rounded-2xl">

// Shadows
<div className="shadow-lg">
<div className="shadow-2xl">
```

### Using CSS Variables

For inline styles or non-Tailwind scenarios, CSS variables are available:

```tsx
<div style={{
  backgroundColor: 'var(--color-primary)',
  borderRadius: 'var(--border-radius-lg)',
  padding: 'calc(var(--spacing-base) * 2)'
}}>
```

### In JavaScript/TypeScript

Import and use the theme object directly:

```tsx
import { theme } from './theme';

// Access theme values
const MyComponent = () => {
  const primaryColor = theme.colors.primary.DEFAULT;
  const fontSize = theme.typography.fontSize.xl;

  return <div style={{ color: primaryColor, fontSize }}>Content</div>;
};
```

### Using the Hook

For convenient access in components:

```tsx
import { useTheme } from './hooks/useTheme';

const MyComponent = () => {
  const theme = useTheme();

  return <div style={{ color: theme.colors.primary.DEFAULT }}>Content</div>;
};
```

## Updating the Theme

To change the visual design across the entire application:

1. Open **`src/theme.ts`**
2. Modify the values you want to change
3. Save the file
4. The changes will automatically apply to all components

### Example: Changing Primary Color

```typescript
// Before
primary: {
  DEFAULT: '#000000',
  light: '#1a1a1a',
}

// After (Blue theme)
primary: {
  DEFAULT: '#3b82f6',
  light: '#60a5fa',
}
```

### Example: Changing Font Family

```typescript
// Before
fontFamily: {
  primary: "'Inter', system-ui, -apple-system, sans-serif",
}

// After (Using Roboto)
fontFamily: {
  primary: "'Roboto', system-ui, -apple-system, sans-serif",
}
```

Remember to update the Google Fonts import in `src/index.css` if changing fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700;800&display=swap');
```

### Example: Adjusting Spacing Scale

```typescript
// Before
spacing: {
  2: '1rem',      // 16px
}

// After (Tighter spacing)
spacing: {
  2: '0.75rem',   // 12px
}
```

## Best Practices

1. **Always use theme values** instead of hardcoded colors, sizes, or spacing
2. **Avoid inline styles** when possible; prefer Tailwind classes
3. **Test changes** across multiple components after updating the theme
4. **Maintain consistency** by using the predefined scale values
5. **Document custom additions** if extending the theme with new values

## Theme Structure

```
src/
├── theme.ts              # Main theme configuration
├── index.css             # CSS variables (synced with theme.ts)
├── hooks/
│   └── useTheme.ts       # Hook for accessing theme in components
└── tailwind.config.js    # Tailwind integration (synced with theme.ts)
```

## Available Color Tokens

| Token | Usage | Example |
|-------|-------|---------|
| `primary` | Main brand color | Buttons, links, headers |
| `secondary` | Supporting color | Secondary buttons, accents |
| `accent` | Highlight color | Call-to-action elements |
| `bg-primary` | Main background | Page background |
| `bg-secondary` | Alternate background | Cards, sections |
| `text-primary` | Main text color | Body text, headings |
| `text-secondary` | Secondary text | Captions, descriptions |
| `border` | Border color | Dividers, outlines |

## Responsive Design

Breakpoints are defined in the theme and match Tailwind's default breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use responsive utilities in Tailwind:

```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text size
</div>
```

## Troubleshooting

**Q: Changes to theme.ts aren't appearing**
A: Make sure to restart the development server after making changes to the theme file.

**Q: TypeScript errors when using theme values**
A: Ensure you're importing from the correct path: `import { theme } from './theme'`

**Q: Build fails after theme changes**
A: Run `npm run build` to check for any syntax errors in your theme configuration.
