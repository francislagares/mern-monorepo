export const importOrderConfig = [
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
];
