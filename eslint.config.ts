import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier/flat';
import astro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint, { type ConfigArray } from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default defineConfig(
  ...compat.plugins('eslint-plugin-jsx-a11y'),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  astro.configs.recommended,
  perfectionist.configs['recommended-natural'],
  prettierConfig,
  security.configs.recommended,
  sonarjs.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn',
    },
  }
) satisfies ConfigArray;
