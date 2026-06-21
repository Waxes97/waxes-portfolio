---
name: Atomic Engineering
colors:
  surface: '#15121b'
  surface-dim: '#15121b'
  surface-bright: '#3b3742'
  surface-container-lowest: '#0f0d15'
  surface-container-low: '#1d1a23'
  surface-container: '#211e27'
  surface-container-high: '#2c2832'
  surface-container-highest: '#37333d'
  on-surface: '#e7e0ed'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e7e0ed'
  inverse-on-surface: '#322f39'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#ffb869'
  on-tertiary: '#482900'
  tertiary-container: '#ca801e'
  on-tertiary-container: '#3f2300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffdcbb'
  tertiary-fixed-dim: '#ffb869'
  on-tertiary-fixed: '#2c1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#15121b'
  on-background: '#e7e0ed'
  surface-variant: '#37333d'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for an elite freelance gameplay systems engineer. The brand personality is rooted in **precision, authority, and technological mastery**. It avoids typical "gaming" tropes—no aggressive neon, no cluttered interfaces, and no character art—focusing instead on the architectural beauty of code and system logic.

The visual direction follows a **Modern Minimalism** approach infused with **Subtle Glassmorphism**. It prioritizes extreme legibility, high-contrast typography, and a "volumetric" dark mode. Surfaces should feel like obsidian or polished glass, utilizing depth and light rather than color to define hierarchy. The emotional response should be one of calm confidence and high-ticket reliability.

## Colors

The palette is anchored in **Atomic Black**, a deep, infinite background that provides the highest possible contrast for typography. 

- **Primary & Secondary:** A duo of vibrant purples (Violet and Purple) are used sparingly for interactive states, key highlights, and soft atmospheric glows.
- **Surface Layering:** The secondary background (#0B0B12) creates a subtle shift in depth for cards and containers, providing a "lifted" feel from the base obsidian layer.
- **Atmospheric Gradients:** Use 15-25% opacity radial gradients of the primary color in the background corners to create a volumetric lighting effect, simulating a high-end studio environment.

## Typography

This design system utilizes **Geist** for headlines and UI labels to provide a technical, high-precision aesthetic. **Inter** is used for body copy to ensure maximum readability and a familiar, professional tone.

- **Scale:** High contrast between display sizes and body text is essential to establish authority.
- **Tracking:** Negative letter-spacing is applied to larger headlines to create a tight, editorial feel. Labels use increased tracking and uppercase styling for a "spec-sheet" technical look.
- **Color Application:** Use pure white (#FFFFFF) only for primary headlines. All body text and secondary information should use muted slate (#94A3B8) to reduce eye strain and maintain the premium dark atmosphere.

## Layout & Spacing

The layout philosophy is **spacious and structural**, adhering to a 12-column fixed grid for desktop and a single-column fluid grid for mobile.

- **Vertical Rhythm:** A generous 160px gap between sections on desktop provides the "Apple-level" breathing room required for luxury positioning.
- **Alignment:** All elements should align to an 8px baseline grid to ensure mathematical precision in the engineering-focused UI.
- **Safety Zones:** Maintain a minimum 24px gutter between columns to prevent content crowding.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Glassmorphism**, rather than traditional heavy shadows.

- **Glass Borders:** Cards and containers use a 1px solid border with a very low opacity (10-15%) of the primary violet color. This creates a "etched glass" effect.
- **Backdrop Blurs:** Floating elements (like navigation bars) must use a `backdrop-filter: blur(20px)` with a semi-transparent background color of #050505 at 70% opacity.
- **Inner Glows:** Interactive elements like buttons should feature a subtle 1px inner stroke of white at 10% opacity on the top edge to simulate light hitting a physical edge.
- **Atmospheric Glow:** Use large, blurred "blobs" of #8B5CF6 behind key sections at 5-10% opacity to create a sense of three-dimensional space.

## Shapes

The shape language is **refined and modern**. A medium roundedness (8px for standard components) provides a professional yet approachable feel.

- **Standard Radius:** 8px (`rounded-md`) for buttons, inputs, and small chips.
- **Large Radius:** 16px (`rounded-lg`) for main content cards and containers.
- **Extra Large:** 24px (`rounded-xl`) for featured sections or image containers.
- **Pills:** Used exclusively for tags or status indicators to distinguish them from functional buttons.

## Components

### Buttons
Buttons are high-contrast. **Primary buttons** feature a solid #8B5CF6 fill with a subtle "outer glow" shadow (0px 0px 20px rgba(139, 92, 246, 0.3)) on hover. **Secondary buttons** use a ghost style with the "Glass Border" technique and a slight background tint on hover.

### Cards
Cards are the primary structural element. They use the #0B0B12 surface color, 1px violet-tinted borders, and 16px corner radius. Content within cards should have generous internal padding (min 32px).

### Navigation
The navigation should be a "Floating Island" design: a centered, pill-shaped bar with a heavy backdrop blur and a thin glass border. Active links are indicated by a small, subtle violet dot below the text.

### Input Fields
Inputs are minimal: no background fill, just a bottom border of #94A3B8. On focus, the border transitions to #8B5CF6 with a very soft, 2px outer glow.

### Technical Spec Chips
Small, Geist-font chips with a mono-spaced feel are used to list technologies (e.g., "C++", "Unreal Engine"). These use a #0B0B12 background and a #94A3B8 text color with uppercase styling.