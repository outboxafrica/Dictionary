const path = require('path');
const pathBrowserify = require('path-browserify');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports.onPreBootstrap = () => {
	require('isomorphic-fetch');
};

module.exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /firebase/,
						use: 'null-loader'
					}
				]
			},
			externals: getConfig().externals.concat(function(context, request, callback) {
				const regex = /^@?firebase(\/(.+))?/;
				// exclude firebase products from being bundled, so they will be loaded using require() at runtime.
				if (regex.test(request)) {
					return callback(null, `umd ${request}`);
				}
				callback();
			})
		});
	}
	actions.setWebpackConfig({
		resolve: {
			modules: [ path.resolve(__dirname, 'src'), 'node_modules' ],
			alias: {
				path: require.resolve('path-browserify')
			},
			fallback: { path: false }
		},
		node: {
			fs: 'empty'
		}
	});
};
