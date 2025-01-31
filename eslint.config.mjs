import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',

      'prefer-const': ['warn'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': ['warn', { 'allow': ['warn', 'error'] }],
      'no-undef': 'warn',
      'consistent-return': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'no-var': 'error',
      'no-magic-numbers': ['error', { 'ignore': [0, 1] }],
      'camelcase': 'warn',
      'no-mixed-spaces-and-tabs': 'error',
      'eqeqeq': ['error', 'always'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      // 'max-len': ['error', { 'code': 100 }],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': false }],

      // Специфические правила для Next.js
      '@next/next/no-img-element': 'off', // Разрешаем использовать <img>, а не <Image />
      '@next/next/no-html-link-for-pages': 'off', // Разрешаем <a href="/page">
      'react/react-in-jsx-scope': 'off', // В Next.js не нужно импортировать React
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Разрешаем JSX в TSX
      'react/display-name': 'off', // Отключаем требование имени для компонентов
    },
  },
);
