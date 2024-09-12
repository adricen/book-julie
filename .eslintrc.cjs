/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
        '@vue/eslint-config-prettier/skip-formatting',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    env: {
        browser: true,
        node: true,
    },
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            node: true,
            typescript: {
                project: ['tsconfig.app.json'],
            },
        },
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'prettier/prettier': 'warn',
        'linebreak-style': ['error', 'unix'],
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'no-multi-spaces': [
            'error',
            {
                'ignoreEOLComments': true,
            },
        ],
        'function-paren-newline': ['error', 'consistent'],
        'import/no-extraneous-dependencies': 'off',
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'ignore',
            },
        ],
        'object-curly-newline': [
            'error',
            {
                'ObjectPattern': {
                    'multiline': true,
                    'consistent': true,
                },
            },
        ],
        'no-param-reassign': [
            'error',
            {
                'props': false,
            },
        ],
        'global-require': 'off',
        'function-call-argument-newline': 'off',
        'no-promise-executor-return': 'off',
        'prefer-regex-literals': 'off',
        'space-before-blocks': 'error',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-shadow': 'off',
        'import/no-cycle': 'off',
        'newline-before-return': 'off',
        'import/order': [
            'error',
            {
                groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
            },
        ],
        'import/extensions': [
            'error',
            'never',
            {
                vue: 'always',
                json: 'always',
            },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': ['warn'],
        'vue/max-attributes-per-line': [
            2,
            {
                'singleline': 4,
                'multiline': {
                    'max': 1,
                },
            },
        ],
        // eslint-disable-next-line prefer-destructuring
        'prefer-destructuring': [
            'error',
            {
                'array': false,
                'object': true,
            },
        ],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/no-v-html': 'warn',
        'vue/no-unused-refs': 'error',
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'beside',
                multiline: 'below',
            },
        ],
        'vue/component-api-style': ['warn', ['script-setup', 'options']],
        'vue/block-lang': [
            'error',
            {
                script: {
                    lang: 'ts',
                },
            },
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style'],
            },
        ],
    },
    ignorePatterns: ['node_modules', 'dist', 'public', 'coverage', 'cypress', 'old-src'],
};
