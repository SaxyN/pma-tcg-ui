/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "production",
    devtool: "inline-source-map",
    // devtool: "nosources-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/assets/images", to: "assets" },
        //     ],
        // }),
    ],
    output: {
        filename: "js/[name].bundle.js",
        path: "C:/FXServer/server-data/resources/pma-laptop/dist/html/",
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});