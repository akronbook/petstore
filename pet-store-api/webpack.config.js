var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: {
        "api": './src/index.ts'
    },
    target: "node",
    node: {
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configuration: require('./tslint.json')
                }
            },
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                options: { allowTsInNodeModules: true }
            }
        ]
    },
    resolve: {
        mainFields: ["main", "module"],
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
    ]
};