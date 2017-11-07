module.exports = {
  extends: require.resolve('eslint-config-airbnb'),
  env: { browser: true, node: true, es6: true, mocha: true, jest: true },
  parser: require.resolve('babel-eslint'),
  plugins: [
    'react',
    'import',
  ],
  settings: {
    'import/extensions': ['.js'],
    'import/ignore': ['node_modules', '.json$', '.sss$']
  },
  globals: {},
  rules: {
    complexity: ['error', 4],
    semi: ['error', 'never'],
    'global-require': 'error',
    'no-unused-vars': 'error',
    'no-case-declarations': 0,
    'no-param-reassign': ['error', { props: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'no-underscore-dangle':
    ['error', { allowAfterThis: false, allow: ['__', '__data', '__html'] }],
    'max-len': ['error', 250],
    'react/prefer-stateless-function': 'off',
    'react/no-multi-comp': 'off',
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/jsx-no-bind':
    [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowBind: false
      }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-handler-names':
    ['error', { eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on' }],
    'jsx-quotes': ['error', 'prefer-single'],
    'import/no-unresolved': ['error', { commonjs: true, amd: false }],
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/imports-first': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/sort-comp':
    [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^handle.+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'no-console': 'error',
    'no-confusing-arrow': 'off',
    'no-alert': 'off',
    'no-debugger': 'off',
  }
}
