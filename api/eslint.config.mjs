import eslintRecomended from '@eslint/js';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImportPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import typescriptEslint from 'typescript-eslint';

export default [
  ...typescriptEslint.configs.recommended,
  eslintRecomended.configs.recommended,
  eslintConfigPrettier,

  {
    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {},
      },

      globals: {
        ...globals.browser,
        ...globals.node,
        it: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
      },
    },

    plugins: {
      'typescript-eslint': typeScriptEslintPlugin,
      import: eslintImportPlugin,
      prettier: prettierPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'array-bracket-spacing': 1,
      'react/prop-types': ['off'],
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [

            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/controllers/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/services/**',
              group: 'internal',
              position: 'after',
            },

            {
              pattern: '@/libs/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/interfaces/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/utils/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/config/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/events/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },

  {
    ignores: [
      '*.{js,mjs,mts,config.js,config.ts}',
      'dist/**',
      'infra/**',
      'node_modules/**',
      '**/coverage/**',
      '**/build/**',
    ],
  },
];
