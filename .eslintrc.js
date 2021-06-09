// module.exports = {
//     root: true,
//     extends: '@react-native-community',
//     parser: 'babel-eslint',
// };
module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
    },
    extends: '@react-native-community',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'react-native/no-inline-styles': 1,
        'prettier/prettier': [
            // 'disabled',
            'error',
            {
                'no-inline-styles': false,
                singleQuote: true,
                parser: 'flow',
                proseWrap: 'never',
            },
            { singleQuote: true, parser: 'flow' },
        ],
    },
};
