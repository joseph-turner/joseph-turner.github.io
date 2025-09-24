export default {
  plugins: {
    '@tailwindcss/postcss': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
    'postcss-preset-env': {
      stage: 1,
    },
  },
};
