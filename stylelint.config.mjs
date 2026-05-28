/** @type {import('stylelint').Config} */
const config = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
  ],
  ignoreFiles: ['**/*.svg', '.astro/**', 'build/**', 'dist/**'],
  rules: {
    'at-rule-no-deprecated': [
      true,
      { ignoreAtRules: ['apply'] },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'custom-variant',
          'plugin',
          'responsive',
          'screen',
          'tailwind',
          'theme',
          'utility',
          'variants',
        ],
      },
    ],
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'import-notation': 'string',
    'max-nesting-depth': 3,
  },
};

export default config;
