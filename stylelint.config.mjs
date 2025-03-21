export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: [
    'node_modules/**/*',
    'dist/**/*',
    'build/**/*',
    '**/*.svg',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'short',
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'string-quotes': 'double',
  },
};
