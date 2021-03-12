const path = require('path');
const pathBrowserify = require('path-browserify');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports.onCreateWebpackConfig = ({ stage, actions }) => {
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
