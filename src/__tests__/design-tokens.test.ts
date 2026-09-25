/**
 * @synetics/design-tokens - Unit Tests
 * Verifies design token generation, theme CSS output, and CSS custom properties.
 */

import { describe, expect, it } from 'vitest';
import { generateSyneticsThemeCSS, colorTokens, spacingTokens } from '../index.js';

describe('@synetics/design-tokens', () => {
  it('defines core color and spacing tokens', () => {
    expect(colorTokens.primary['500']).toBeDefined();
    expect(spacingTokens.md).toBe('1rem');
  });

  it('generates universal --syn-* CSS theme variables', () => {
    const css = generateSyneticsThemeCSS();

    expect(css).toContain(':root');
    expect(css).toContain('--syn-color-primary:');
    expect(css).toContain('--syn-space-md:');
    expect(css).toContain('--syn-radius-md:');
    expect(css).toContain('[data-theme="dark"]');
  });
});
