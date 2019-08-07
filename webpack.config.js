const resolve = require('path').resolve;

module.exports = {
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
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}