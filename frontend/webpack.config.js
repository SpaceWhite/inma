const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'css' }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'js' }
            ]
        })
    ],
};

