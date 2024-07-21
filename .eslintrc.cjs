module.exports = {
  plugins: ['sonarjs'],
  extends: [
    'plugin:astro/recommended',
    'plugin:sonarjs/recommended-legacy',
    'plugin:compat/recommended',
    'plugin:promise/recommended',
    'plugin:astro/jsx-a11y-strict',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx', '*.mjs'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {},
    },
  ],
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/eslint.md
 */
