const WebpackDotenvPlugin = require('dotenv-webpack');

module.exports = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'src'],
	},
	webpack(config) {
		config.plugins.push(new WebpackDotenvPlugin());
		return config;
	},
};
