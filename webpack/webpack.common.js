const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts)x?$/,
                use: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(mp3|ogg|wav)$/,
                use: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            minify: false,
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
            ],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};