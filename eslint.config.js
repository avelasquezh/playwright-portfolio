import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      'eslint.config.js',
      'playwright.config.ts',
      'node_modules/',
      'dist/',
      'coverage/'
    ]
  },
  js.configs.recommended,

  // Reglas recomendadas + type-aware
  ...tseslint.configs.recommendedTypeChecked,

  // Opcional pero útil: estilo más estricto
  ...tseslint.configs.stylisticTypeChecked,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true, // usa automáticamente tu tsconfig.json
      },
    },
    rules: {
      // Endurecimiento real
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
]