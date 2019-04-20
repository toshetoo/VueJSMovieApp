// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-warn-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['warn', 'always', {
      js: 'never',
      vue: 'never',
      json: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['warn', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['warn', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // added by Andrey Petrov
    'import/no-unresolved': 'off',
    'no-console': 'off',
    'spaced-comment': 'off',
    'linebreak-style': 'off',
    'object-curly-spacing': ['warn', 'never'],
    'indent': 'off',
    'vue/script-indent': ['warn', 2, {
      'baseIndent': 1,
      'switchCase': 1,
    }],
    'no-underscore-dangle': 0,
    'function-paren-newline': ['warn', 'consistent'],
    'max-len': ['warn', { 'code': 160 }]
  }
}