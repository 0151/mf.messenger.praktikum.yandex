const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/static',
                    to: '',
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.ts'],
    },
}