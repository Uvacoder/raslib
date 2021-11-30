module.exports = {
  // Configuration for JavaScript files
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ]
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint',
        'import',
        'unused-imports',
        'react',
        'react-hooks',
        'sonarjs',
        'simple-import-sort',
        'prettier'
      ],
      extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true
          }
        ],
        'no-underscore-dangle': 0,
        'react-hooks/exhaustive-deps': 0,
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before'
              }
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true
            }
          }
        ],
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'class-methods-use-this': 'off', // _document.tsx use render method without `this` keyword
        'no-alert': 'off',
        'no-console': 'off',
        'consistent-return': 0,
        'no-prototype-builtins': 0,
        'jsx-a11y/alt-text': 0,
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': 0,
        // "unused-imports/no-unused-vars": [
        //   "error",
        //   {
        //     "argsIgnorePattern": "^_"
        //   }
        // ],
        // Formatting
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': 'off',
        'comma-spacing': 'error',
        'comma-style': 'error',
        'jsx-quotes': 'error',
        'key-spacing': ['error'],
        'keyword-spacing': 'off',
        'line-comment-position': 'off',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': 'error',
        'no-negated-in-lhs': 'error',
        'no-nested-ternary': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-duplicate-imports': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'max-depth': 'error',
        'max-nested-callbacks': 'error',
        'padded-blocks': ['error', 'never'],

        'lines-around-directive': 'error',
        'lines-between-class-members': 'error',
        'operator-linebreak': 'error',
        'linebreak-style': 'error',
        'object-shorthand': 'error',
        'object-curly-newline': [
          'error',
          {
            ImportDeclaration: 'never',
            ExportDeclaration: {
              multiline: true,
              minProperties: 3
            }
          }
        ],
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': [
          'error',
          {
            allowAllPropertiesOnSameLine: true
          }
        ],
        'newline-after-var': 'error',
        'newline-before-return': 'off',
        'newline-per-chained-call': 'off',
        'func-call-spacing': 'off',
        'func-name-matching': 'error',
        'func-names': 'error',
        'func-style': [
          'error',
          'declaration',
          {
            allowArrowFunctions: true
          }
        ],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': 'off',
        'rest-spread-spacing': 'error',
        'array-bracket-newline': 'off',
        'array-element-newline': ['error', 'consistent'],
        'simple-import-sort/imports': 'error',
        quotes: [
          2,
          'single',
          {
            avoidEscape: true
          }
        ],
        'no-extra-semi': 'error',
        'spaced-comment': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
          }
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': [
          'error',
          {
            words: true,
            nonwords: false
          }
        ],
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'yield-star-spacing': 'error',
        yoda: 'error',
        indent: [
          'off',
          2,
          {
            offsetTernaryExpressions: true
          }
        ],
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error'
      }
    }
  ]
}
