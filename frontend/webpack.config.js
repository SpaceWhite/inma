const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        map: './src/page/map.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'css', to: 'css' }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'js', to: 'js' }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'asset', to: 'asset' }
            ]
        }),
        new HtmlWebpackPlugin({
	    filename: "map.html",
            template: 'html/map.html'
	}),
    ],
    resolve: {
      fallback: { "querystring": require.resolve("querystring-es3") }
    }
};

