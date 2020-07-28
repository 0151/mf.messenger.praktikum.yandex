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
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.handlebars$/,
                use: 'raw-loader',
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
        extensions: ['.ts', '.js'],
    },
    watchOptions: {
        aggregateTimeout: 200,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
    }
}