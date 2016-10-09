
( function( window, bender ) {
	'use strict';

	if ( !bender.assert ) {
		throw new Error( 'bender.assert is not defined. Make sure that bender-framework-yui plugin is loaded.' );
	}

	bender.assert.beautified = {
		/**
		 * Config used in `js-beautify` calls.
		 * 
		 * @private
		 */
		_config: {
			'indent_with_tabs': true
		},

		/**
		 * Compares HTML code, but beautifies it before the comparision.
		 *
		 * @param {mixed} expected
		 * @param {mixed} actual
		 * @param {String} msg
		 */
		html: function( expected, actual, msg ) {
			assert.areSame( html_beautify( expected, this._config ), html_beautify( actual, this._config ), msg );
		},

		/**
		 * Compares JavaScript code, but beautifies it before the comparision.
		 *
		 * @param {mixed} expected
		 * @param {mixed} actual
		 * @param {String} msg
		 */
		js: function( expected, actual, msg ) {
			assert.areSame( js_beautify( expected, this._config ), js_beautify( actual, this._config ), msg );
		}
	};

} )( window, bender );