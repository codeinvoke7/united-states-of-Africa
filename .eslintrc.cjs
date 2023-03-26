export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'require-jsdoc': [0],
    'react/react-in-jsx-scope': 0,
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../']
      }
    ]
  }
};
