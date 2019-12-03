module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-empty-pattern': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-new': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-newline': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-expressions': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': ["error", { "skipBlankLines": true }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
