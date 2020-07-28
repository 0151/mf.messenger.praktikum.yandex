import * as path from 'path'
import * as webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'

const config: webpack.Configuration = {
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

export default config