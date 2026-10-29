import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'no-var': 'error',
      // Настроены отступы в 2 пробела с правилом для конструкции switch
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      
      // Дополнительные базовые правила
      'no-console': 'off',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }]
    }
  }
];