import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export const eslintConfigFactory = svelteConfig =>
  ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,
    prettier,
    ...svelte.configs.prettier,
    {
      languageOptions: {
        globals: { ...globals.browser, ...globals.node },
      },
      rules: { 'no-undef': 'off' },
    },
    {
      files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
      languageOptions: {
        parserOptions: {
          projectService: true,
          extraFileExtensions: ['.svelte'],
          parser: ts.parser,
          svelteConfig,
        },
      },
    },
  );
