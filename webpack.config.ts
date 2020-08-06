import * as path from 'path'
import * as webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const config: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[contenthash].js',
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader',]
                })
            },
            {
                test: /\.handlebars$/,
                use: 'raw-loader',
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            title: 'Мессенджер',
            template: 'src/static/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/static',
                    globOptions: {
                        ignore: [
                            'src/static/index.html',
                        ]
                    },
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
    },
    devtool: 'eval'
}

export default config