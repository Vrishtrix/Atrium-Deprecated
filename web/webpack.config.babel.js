import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = (env, argv) => {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './public/index.html'
			})
		],

		entry: {
			App: './app/App.js'
		},

		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},

		devServer: {
			compress: true,
			historyApiFallback: true
		},

		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						'babel-loader'
					]
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						'file-loader'
					]
				},
				{
					test: /\.svg$/,
					use:  ['svg-inline-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		}
	}
}