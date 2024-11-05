import tsPlugin from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import tsdocPlugin from 'eslint-plugin-tsdoc'
import tsParser from '@typescript-eslint/parser'
import { configs as tsConfigs } from '@typescript-eslint/eslint-plugin'

export default [
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        jest: 'readonly',
        node: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
      tsdoc: tsdocPlugin,
    },
    rules: {
      ...tsConfigs.recommended.rules,
      'no-console': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-dupe-class-members': ['error'],
      '@typescript-eslint/no-useless-constructor': ['error'],
      '@typescript-eslint/no-inferrable-types': ['off'],
      'import/extensions': ['error', 'ignorePackages', { js: 'always', jsx: 'never', ts: 'never', tsx: 'never' }],
    },
    ignores: ['node_modules/', 'dist/', 'coverage/', 'scripts/', 'cmd/', 'tools/', '*.d.ts'],
  },
]
