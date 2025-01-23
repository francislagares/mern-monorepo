import eslintRecomended from '@eslint/js';
import eslintNextPlugin from '@next/eslint-plugin-next';
import typeScriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintImportPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintTestingLibrary from 'eslint-plugin-testing-library';
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
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
        cy: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
      },
    },

    plugins: {
      'react-hooks': eslintPluginReactHooks,
      'testing-library': eslintTestingLibrary,
      'typescript-eslint': typeScriptEslintPlugin,
      next: eslintNextPlugin.configs.recommended,
      import: eslintImportPlugin,
      prettier: prettierPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: '.',
        },
      },
      react: {
        reactVersion: 'detect',
      },
    },

    rules: {
      'prettier/prettier': 'error',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'array-bracket-spacing': 1,
      'react/prop-types': ['off'],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/function-component-definition': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      'import/prefer-default-export': 'off',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': [
        'error',
        {
          css: 'always',
          js: 'never',
          json: 'always',
          jsx: 'never',
          mjs: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
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
              pattern: 'react',
              group: 'external',
              position: 'before',
            },

            {
              pattern: 'next',
              group: 'external',
              position: 'before',
            },

            {
              pattern: '**/next/**',
              group: 'external',
              position: 'before',
            },

            {
              pattern: '@/layout/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/features/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/components/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/services/**',
              group: 'internal',
              position: 'after',
            },

            {
              pattern: '@/hooks/**',
              group: 'internal',
              position: 'before',
            },

            {
              pattern: '@/shared/**',
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
      '.next/**',
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'build/**',
    ],
  },
];
