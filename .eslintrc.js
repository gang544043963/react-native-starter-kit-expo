module.exports = {
    extends: '@react-native-community',
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@angular-eslint/no-empty-lifecycle-method': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'comma-dangle': 'off',
        'no-shadow': 'off',
        'no-control-regex': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
            }
        ]
    }
};
