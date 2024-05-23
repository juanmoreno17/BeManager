module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier', 'jest'],
    rules: {
        'prettier/prettier': 'warn',
    },
    env: {
        'jest/globals': true,
    },
};
