module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:markdown/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // prettier相关去除, 采用standard
    // 'prettier',
    // 'prettier/standard',
    // 'plugin:prettier/recommended',
    // 'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  // },
  plugins: ['markdown', 'react', 'babel', '@typescript-eslint', 'jest', 'react-hooks', 'prettier'],
  settings: {
    jest: {
      version: 'detect',
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['*.tsx', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*.md/*{.js,.jsx,.tsx}'],
      globals: {
        React: true,
        ReactDOM: true,
        mountNode: true,
        useState: true,
        useCallback: true,
        useContext: true,
        useEffect: true,
        useRef: true,
        render: true,
        lodash: true,
      },
      rules: {
        indent: 0,
        'no-console': 0,
        'no-plusplus': 0,
        'eol-last': 0,
        'no-script-url': 0,
        'prefer-rest-params': 0,
        'react/no-access-state-in-setstate': 0,
        'react/destructuring-assignment': 0,
        'react/no-multi-comp': 0,
        'jsx-a11y/href-no-hash': 0,
        'import/no-extraneous-dependencies': 0,
        'jsx-a11y/control-has-associated-label': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        'react/jsx-no-undef': 0,
        // 'no-undef': 0,
        // 'react-in-jsx-scope': 0,
        // 会在句首添加分号  https://prettier.io/docs/en/rationale.html#semicolons
        // 'prettier/prettier': [
        //   'error',
        //   {
        //     semi: false,
        //   },
        // ],
        'prettier/prettier': 0,
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'lines-between-class-members': [1, 'always'],
    'keyword-spacing': [1, { before: true, after: true }],
    'object-curly-spacing': [1, 'always'],
    'space-before-blocks': 1,
    'space-infix-ops': 1,
    'arrow-spacing': 1,
    'jsx-quotes': [1, 'prefer-double'],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/alt-text': 0,
    'no-var': 1,
    'prefer-const': 1,
    'array-bracket-newline': [1, { multiline: true }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-self-assign': 0,
  },
}
