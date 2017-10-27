var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    'entry': {
        style: './src/styles/style.css',
        main: ['webpack-hot-middleware/client', './src/App.js'],
    },

    devServer: {
        contentBase: './public',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [

                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
        ]
    },
    'output': {
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        path: path.resolve(__dirname + '/public'),
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]

}