/** @type {import('stylelint').Config} */
const config = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
  ],
  ignoreFiles: ['**/*.svg'],
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands'],
      },
    ],
    'import-notation': 'string',
    'max-nesting-depth': 3,
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
          'responsive',
          'screen',
          'tailwind',
          'theme',
          'utility',
          'variants',
        ],
      },
    ],
  },
};

export default config;
