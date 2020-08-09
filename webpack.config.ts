import * as path from 'path'
import * as webpack from 'webpack'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    process.env.NODE_ENV !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
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
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Мессенджер',
            template: 'src/static/index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/static',
                    to: '',
                    globOptions: {
                        ignore: [
                            '**/*.html'
                        ]
                    }
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
        hot: true,
        port: 3000
    },
    devtool: 'eval'
}

export default config