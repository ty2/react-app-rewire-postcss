'use strict';

var index = (config, options) => {
	// find any first matching rule that contains postcss-loader
	filterPostCSSLoader(config.module.rules).forEach(rule => {
		filterPostCSSLoader(rule.oneOf).forEach(oneOf => {
			filterPostCSSLoader(oneOf.use || oneOf.loader).forEach(use => {
				// use the latest version of postcss-loader
				use.loader = require.resolve('postcss-loader');

				// conditionally replace options with a custom configuration
				use.options = options ? options : use.options;
			});
		});
	});

	// return the mutated configuration
	return config;
};

// return a filtered array that includes postcss-loader
const filterPostCSSLoader = array => array.filter(object => JSON.stringify(object).includes('postcss-loader'));

module.exports = index;
//# sourceMappingURL=index.cjs.js.map
