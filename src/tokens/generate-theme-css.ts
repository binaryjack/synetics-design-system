/**
 * @synetics/design-tokens - CSS Generator
 * Generates universal CSS variables (--syn-*) for agnostic consumption
 */

import { colorTokens } from '../tokens/color-tokens.js';
import { spacingTokens } from '../tokens/spacing-tokens.js';
import { borderRadiusTokens } from '../tokens/border-radius-tokens.js';
import { shadowTokens } from '../tokens/shadow-tokens.js';
import { transitionTokens } from '../tokens/transition-tokens.js';
import { typographyTokens } from '../tokens/typography-tokens.js';

export function generateSyneticsThemeCSS(): string {
  const lines: string[] = [];

  lines.push('/* ==========================================================================');
  lines.push('   @synetics/design-tokens - Universal CSS Variables');
  lines.push('   FSP Shared Foundations: usable in Shadow DOM, Tailwind, or Plain CSS');
  lines.push('   ========================================================================== */');
  lines.push('');
  lines.push(':root {');

  // Semantic defaults
  lines.push('  /* Semantic Core Colors */');
  lines.push('  --syn-color-primary: var(--syn-color-primary-600);');
  lines.push('  --syn-color-primary-hover: var(--syn-color-primary-700);');
  lines.push('  --syn-color-primary-active: var(--syn-color-primary-800);');
  lines.push('  --syn-color-primary-contrast: #ffffff;');
  lines.push('');
  lines.push('  --syn-color-surface: #ffffff;');
  lines.push('  --syn-color-surface-muted: var(--syn-color-neutral-100);');
  lines.push('  --syn-color-text: var(--syn-color-neutral-900);');
  lines.push('  --syn-color-text-muted: var(--syn-color-neutral-500);');
  lines.push('  --syn-color-border: var(--syn-color-neutral-200);');
  lines.push('');

  // Primary color scale
  lines.push('  /* Color Palette: Primary */');
  for (const [shade, val] of Object.entries(colorTokens.primary)) {
    lines.push(`  --syn-color-primary-${shade}: ${val};`);
  }
  lines.push('');

  // Secondary color scale
  lines.push('  /* Color Palette: Secondary */');
  for (const [shade, val] of Object.entries(colorTokens.secondary)) {
    lines.push(`  --syn-color-secondary-${shade}: ${val};`);
  }
  lines.push('');

  // Neutral color scale
  lines.push('  /* Color Palette: Neutral */');
  for (const [shade, val] of Object.entries(colorTokens.neutral)) {
    lines.push(`  --syn-color-neutral-${shade}: ${val};`);
  }
  lines.push('');

  // Success color scale
  lines.push('  /* Color Palette: Success */');
  for (const [shade, val] of Object.entries(colorTokens.success)) {
    lines.push(`  --syn-color-success-${shade}: ${val};`);
  }
  lines.push('');

  // Warning color scale
  lines.push('  /* Color Palette: Warning */');
  for (const [shade, val] of Object.entries(colorTokens.warning)) {
    lines.push(`  --syn-color-warning-${shade}: ${val};`);
  }
  lines.push('');

  // Error color scale
  lines.push('  /* Color Palette: Error */');
  for (const [shade, val] of Object.entries(colorTokens.error)) {
    lines.push(`  --syn-color-error-${shade}: ${val};`);
  }
  lines.push('');

  // Spacing
  lines.push('  /* Spacing Scale */');
  for (const [key, val] of Object.entries(spacingTokens)) {
    lines.push(`  --syn-space-${key}: ${val};`);
  }
  lines.push('');

  // Border Radius
  lines.push('  /* Border Radius */');
  for (const [key, val] of Object.entries(borderRadiusTokens)) {
    lines.push(`  --syn-radius-${key}: ${val};`);
  }
  lines.push('');

  // Shadows
  lines.push('  /* Box Shadows */');
  for (const [key, val] of Object.entries(shadowTokens)) {
    lines.push(`  --syn-shadow-${key}: ${val};`);
  }
  lines.push('');

  // Transitions
  lines.push('  /* Transitions */');
  for (const [key, val] of Object.entries(transitionTokens.duration)) {
    lines.push(`  --syn-transition-duration-${key}: ${val};`);
  }
  for (const [key, val] of Object.entries(transitionTokens.timing || {})) {
    lines.push(`  --syn-transition-timing-${key}: ${val};`);
  }
  lines.push('');

  // Typography
  lines.push('  /* Typography */');
  const sansFont = Array.isArray(typographyTokens.fontFamily.sans) ? typographyTokens.fontFamily.sans.join(', ') : typographyTokens.fontFamily.sans;
  const monoFont = Array.isArray(typographyTokens.fontFamily.mono) ? typographyTokens.fontFamily.mono.join(', ') : typographyTokens.fontFamily.mono;
  lines.push(`  --syn-font-sans: ${sansFont};`);
  lines.push(`  --syn-font-mono: ${monoFont};`);
  for (const [key, val] of Object.entries(typographyTokens.fontSize)) {
    lines.push(`  --syn-font-size-${key}: ${val};`);
  }

  lines.push('}');
  lines.push('');

  // Dark Theme
  lines.push('/* Dark Theme Overrides */');
  lines.push('[data-theme="dark"] {');
  lines.push('  --syn-color-primary: var(--syn-color-primary-500);');
  lines.push('  --syn-color-primary-hover: var(--syn-color-primary-400);');
  lines.push('  --syn-color-primary-active: var(--syn-color-primary-300);');
  lines.push('  --syn-color-primary-contrast: #ffffff;');
  lines.push('');
  lines.push('  --syn-color-surface: #0f172a;');
  lines.push('  --syn-color-surface-muted: #1e293b;');
  lines.push('  --syn-color-text: #f8fafc;');
  lines.push('  --syn-color-text-muted: #94a3b8;');
  lines.push('  --syn-color-border: #334155;');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}
