/**
 * @type {import('prettier').Config}
 */
export default {
  arrowParens: 'avoid',
  endOfLine: 'lf',
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
};
