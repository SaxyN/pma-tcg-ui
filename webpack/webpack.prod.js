/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "inline-source-map",
    // devtool: "nosources-source-map",
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "src/assets/img", to: "assets" },
    //         ],
    //     }),
    // ],
    output: {
        filename: "js/[name].bundle.js",
        path: "D:/FXServer/server-data/resources/pma-tcg/dist/ui",
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});