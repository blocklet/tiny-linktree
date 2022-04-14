module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: '@arcblock/eslint-config',
  rules: {
    'unicorn/filename-case': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  globals: {
    logger: true,
  },
};
