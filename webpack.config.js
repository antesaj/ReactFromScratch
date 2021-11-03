const path = require("path");
const webpack = require("webpack");

module.exports = {
    //entry: "./src/index.js", // entrypoint for app, where we use React renderer
    entry: {
        name: "./src/index.js"
    },
    mode: "development", // development | production
    // inform webpack where to put bundled code + name of file
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve("dist"),
        publicPath: "/",
    },
    // inform webpack how and when to use our installed loaders
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}