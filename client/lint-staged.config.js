module.exports = {
  // Run type-check on changes to TypeScript files
  '**/*.ts?(x)': () => 'pnpm type-check',

  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': filenames => `pnpm lint ${filenames.join(' ')}`,

  // Format MarkDown and JSON
  '**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.join(' ')}`,
};
