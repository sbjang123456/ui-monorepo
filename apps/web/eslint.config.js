import {
    baseConfig,
    importConfig,
    nextJsConfig,
    reactConfig,
  } from '@sb/eslint-config';
  
  /** @type {import("eslint").Linter.Config} */
  export default [
    ...baseConfig,
    ...importConfig,
    ...reactConfig,
    ...nextJsConfig,
  ];
  