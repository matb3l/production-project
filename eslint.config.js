// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import airbnbBase from 'eslint-config-airbnb-base'
import airbnbTypescript from 'eslint-config-airbnb-typescript'
import i18next from 'eslint-plugin-i18next'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Переносим это выше
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      ...airbnbBase.rules,
      ...airbnbTypescript.rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/ban-ts-comment': [
        'warn',
        {
          'ts-ignore': 'allow-with-description',
          minimumDescriptionLength: 3,
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  i18next.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.{ts,tsx}', '**/*.story.{ts,tsx}', '.storybook/**/*'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
]
