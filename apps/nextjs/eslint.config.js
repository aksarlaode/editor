import baseConfig, { restrictEnvAccess } from "@aksar/eslint-config/base";
import nextjsConfig from "@aksar/eslint-config/nextjs";
import reactConfig from "@aksar/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
