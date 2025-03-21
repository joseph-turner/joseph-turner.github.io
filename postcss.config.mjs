export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-preset-env': {
      stage: 1,
    },
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};
