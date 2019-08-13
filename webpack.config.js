const resolve = require('path').resolve;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: resolve(__dirname, "dist"),
        port: 9000,
        historyApiFallback: true,
        disableHostCheck: true
    },
    entry: {
        index: [resolve(__dirname, "./src/index.js")]
    },
    output: {
        path: resolve(__dirname, "./dist"),
        library: "VOS",
        filename: "bundle.js",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            "mt-ui-core": resolve(__dirname, "node_modules/mt-ui-core/app"),
            "@mindtickle/mt-ui-components": resolve(__dirname, "node_modules/@mindtickle/mt-ui-components")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.sass$/,
                use: {
                    loader: "sass-loader"
                }
            },
            {
                test: /\.css$/i,
                include: [
                    resolve(__dirname, "src"),
                    resolve(__dirname, "node_modules/@mindtickle/mt-ui-components"),
                    resolve(__dirname, "node_modules/antd")
                ],
                loader: ["style-loader", "css-loader"]
            },
            // {
            //     test: /\.html$/i,
            //     exclude: /node_modules/,
            //     loader: "html-loader"
            // }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html",
    //         filename: "./index.html"
    //     }),
    //     new webpack.optimize.AggressiveMergingPlugin(),
    //     new UglifyJsPlugin(),
    // ]
}