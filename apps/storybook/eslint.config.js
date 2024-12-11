import {
  baseConfig,
  importConfig,
  reactConfig,
  storybookConfig,
  vitestConfig,
  reactTestingLibraryConfig,
  mdxConfig,
} from '@sb/eslint-config';

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  ...importConfig,
  ...reactConfig,
  ...storybookConfig,
  ...vitestConfig,
  ...reactTestingLibraryConfig,
  ...mdxConfig,
];
