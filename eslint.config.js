import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import airbnbBase from 'eslint-config-airbnb-base'
import airbnbTypescript from 'eslint-config-airbnb-typescript'
import i18next from 'eslint-plugin-i18next'

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginReact.configs.flat.recommended, // Переносим это выше
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
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  i18next.configs['flat/recommended'],
]
