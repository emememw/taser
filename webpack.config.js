const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
	context: `${__dirname}/src/js`,
	resolve: {
		root: [
			path.resolve(__dirname, "src/js"),
			path.resolve(__dirname, "node_modules"),
		],
		extensions: ["", ".js"],
	},
	target: "node",
	externals: [nodeExternals()],
	entry: {
		app: ["core/taser.js"],
	},
	output: {
		name: "taser.js",
		libraryTarget: "commonjs2",
		path: `${__dirname}/dist`,
		filename: "taser.js",
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
		}],
	},
	plugins: [],
};
