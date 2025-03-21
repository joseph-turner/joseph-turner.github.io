export default {
  arrowParens: 'always',
  bracketLine: true,
  bracketSpacing: true,
  jsxSingleQuote: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ], // Ensure Tailwind classes are sorted
  printWidth: 65,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
