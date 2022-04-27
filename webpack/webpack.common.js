const HtmlWebpackPlugin = require("html-webpack-plugin");
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
                test: /\.mp3$/,
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
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};