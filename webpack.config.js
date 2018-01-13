const path = require( 'path' );

module.exports = {
	entry: './src/index.js',
	devtool: "inline-sourcemap",
	output: {
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'public' ),
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'react', 'es2015' ]
				},
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', ]
	},
};
