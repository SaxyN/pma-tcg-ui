const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        },
        devMiddleware: {
            stats: {
                colors: true,
                hash: false,
                version: true,
                timings: true,
                assets: false,
                chunks: false,
                modules: false,
                publicPath: false,
            },
        },
    },
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "..", "..", "./dist/html"),
    },
})