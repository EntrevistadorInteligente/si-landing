/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig*/
/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  arrowParens: 'always',
  semi: true,
  tabWidth: 2,
  printWidth: 140,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@content/(.*)$',
    '^@layouts/(.*)$',
    '^@pages/(.*)$',
    '^@data/(.*)$',
    '^@styles/(.*)$',
    '^@/(.*)$',
    '^.[./].*',
    '',
  ],
  tailwindConfig: './tailwind.config.mjs',
  tailwindFunctions: ['cn', 'clsx', 'cva'],
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/prettier.md
 */
