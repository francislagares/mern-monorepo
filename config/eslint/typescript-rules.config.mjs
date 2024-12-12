export const typescriptRules = {
  'prettier/prettier': 'error',
  'no-undef': 'off',
  'no-unused-vars': 'off',
  'array-bracket-spacing': 'warn',
  'react/prop-types': 'off',
  'react/function-component-definition': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-non-null-assertion': 'warn',
};
