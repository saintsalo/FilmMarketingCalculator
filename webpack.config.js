const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

function getDevTool( ) {
	if ( process.env.NODE_ENV !== 'production' ) {
		return 'source-map'; //enables source map
	}
	return false;
}

const distFolder = ( process.env.NODE_ENV !== 'production') ? "public" : "build"

module.exports = {
	entry: './src/index.js',
	devtool: getDevTool( ),
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, distFolder )
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'react', 'es2015', ]
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						},
					}
				],
			},
			{
				test: /\.(scss|css)$/,
				use: [ 'css-hot-loader' ].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: "css-loader"
						}, {
							loader: "sass-loader"
						},
					],
				})),
			},
		]
	},
	plugins: [new ExtractTextPlugin({ filename: "main.css" })],
}
