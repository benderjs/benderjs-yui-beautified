/* jshint browser: false, node: true */

'use strict';

var config = {
	applications: {
		plugin: {
			path: '.',
			files: [
				'plugin.js'
			]
		},
		foo: {
			path: 'lib',
			files: [
				'plugin.js'
			]
		},
	},

	framework: 'yui',

	coverage: {
		paths: [
			'plugin.js'
		],
		options: {
			checkTrackerVar: true
		}
	},

	plugins: [
		'benderjs-coverage',
		'benderjs-yui',
		'lib'
	],

	tests: {
		Plugin: {
			applications: [],
			basePath: '.',
			paths: [
				'tests/**',
				'!**/_*/**'
			]
		}
	}
};

module.exports = config;