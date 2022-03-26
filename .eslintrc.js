module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  root: true,
  rules: {
    /*
    以下は書籍参考のもと使用
    理解が浅いものあり
     */
    // import React from 'react' エラー回避用
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // クラスメンバの定義の際、1行のものは空行を入れなくても良い
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    // voidを文としてなら許容
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // return文の前に常に空行を入れる
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // 使用していない変数でも_の名称は許容
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '_',
        ignoreRestSiblings: false,
        varsIgnorePattern: '_',
      },
    ],
    // 指定のファイルのみimport時に拡張子を省略可能
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // .tsx拡張子のJSXファイルを許容
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // コンポーネント呼び出し時のスプレッド構文は、個々のpropsを明記すれば許容
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
    // Reducerでのエラー回避
    // https://github.com/reduxjs/redux-toolkit/issues/521
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  // propTypesプロパティ定義の強制を.tsxファイルは無効化
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  // eslint-import-resolver-nodeに対してsrcパスを追加している
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
