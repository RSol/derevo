module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [ 'plugin:react/recommended', 'standard', ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [ 'react', '@typescript-eslint', ],
  rules: {
    'no-use-before-define': 'off',

    // JS

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: [ 'error', 'single', ],
    // require or disallow semicolons instead of ASI
    semi: [ 'error', 'never', ],
    'comma-spacing': [ 'error', { before: false, after: true, }, ],
    // require or disallow trailing commas
    'comma-dangle': [ 'error', 'always', ],
    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': [ 'error', 'always', ],
    // allow paren-less arrow functions
    'arrow-parens': [ 'error', 'always', ],
    // disallow multiple spaces
    'no-multi-spaces': 'error',
    // enforce consistent spacing before and after keywords
    'keyword-spacing': [ 'error', { before: true, after: true, }, ],
    // require spacing around infix operators
    'space-infix-ops': 'error',

    // Functions
    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': [ 'error', 'never', ],
    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': [ 'error', 'always', ],
    // enforce consistent spacing inside parentheses
    'space-in-parens': [ 'error', 'never', ],
    // enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': [ 'error', ],

    // Objects
    // enforce consistent spacing inside braces
    'object-curly-spacing': [ 'error', 'always', ],
    // enforce linebreaks after opening and before closing array brackets
    'object-curly-newline': [ 'error', { multiline: true, consistent: true, }, ],
    // enforce line breaks after each array element
    'object-property-newline': 'error',
    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict', }, ],
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // Arrays
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-spacing': [ 'error', 'always', ],
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': [ 'error', { minItems: 5, multiline: true, }, ],
    // enforce line breaks after each array element
    'array-element-newline': [ 'error', { minItems: 5, multiline: true, }, ],
    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': [ 'error', 'never', ],

    'no-console': 0,
    'no-debugger': 0,

    // TS

    // enforce consistent indentation
    '@typescript-eslint/indent': [ 'error', 2, ],
    // enforce the consistent use of either backticks, double, or single quotes
    '@typescript-eslint/quotes': [ 'error', 'single', ],
    // require or disallow semicolons instead of ASI
    '@typescript-eslint/semi': [ 'error', 'never', ],
    '@typescript-eslint/comma-spacing': [ 'error', { before: false, after: true, }, ],
    '@typescript-eslint/brace-style': [ 'error', ],
    '@typescript-eslint/prefer-ts-expect-error': [ 'error', ],
    // '@typescript-eslint/no-magic-numbers': [ 'error', { 'ignoreEnums': true, }, ],

    // Functions
    // require or disallow spacing between function identifiers and their invocations
    '@typescript-eslint/func-call-spacing': [ 'error', 'never', ],
    // enforce consistent spacing before function definition opening parenthesis
    '@typescript-eslint/space-before-function-paren': [ 'error', 'always', ],

    // disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': [ 'error', { functions: false, classes: false, variables: true, }, ],

    // React
    // 'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
    // 'react-hooks/exhaustive-deps': 'warn', // Проверяем зависимости эффекта
  },
}
