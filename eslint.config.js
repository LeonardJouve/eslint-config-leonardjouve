import tseslint from 'typescript-eslint';
import plugin from "./dist/index.js";

export default tseslint.config(plugin.configs.recommended, {
    ignores: [
        "dist/**",
        "eslint.config.js",
    ],
});
