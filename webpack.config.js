const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 出力するhtmlのファイルの場所・ファイル名
            template: './src/index.ejs', // htmlのファイル箇所
            chunks: ['index'], //指定したエントリーポイントとhtmlがまとめて扱われる
        }),
        new MiniCssExtractPlugin({
            filename: 'src/css/style.css',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist')]
        })
    ],
    output: {
        filename: "js/index.js", // 出力するファイル名
        path: path.join(__dirname, 'dist') // 出力先のパス
    },
    devServer: {
        contentBase: './dist',
        index: 'index.html',
        open: true, // サーバー起動時にブラウザを開く 
        overlay: true // エラーや警告をブラウザに表示する
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            //ejs
            {
                test: /\.ejs$/i,
                use: [{
                        loader: 'html-loader', //htmlの解釈・html出力用jsの出力(→HtmlWebpackPluginでhtml変換)
                    },
                    {
                        loader: 'ejs-plain-loader' // ejs→html
                    }
                ],
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                modules: false
                            }]
                        ]
                    }
                }]
            },

            // sassコンパイル用
            {
                test: /\.s[ac]ss$/i, // 対象となるファイルの拡張子(scss/sass)
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            // css用
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ],
            },

            // ファイルをバンドルせずに外部ファイルの参照を保つ
            {
                test: /\.(gif|png|jpg|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'src/images', // 画像の保存先
                        publicPath: function (path) {
                            return '../images/' + path;
                        },
                    }
                }]
            },

        ],
    },
    stats: {
        children: true,
    },
}