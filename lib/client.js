
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
		_config: {},

		/**
		 * Compares HTML code, but beautifies it before the comparison.
		 *
		 * @param {mixed} expected
		 * @param {mixed} actual
		 * @param {String/Object} optionsOrMsg Assertion message if string, otherwise an options object like following:
		 *
		 *		{
		 *			message: 'Fail message',
		 *			sortAttributes: true,
		 *			fixZWS: false
		 *		}
		 *
		 * If you don't want to format `expected` and `actual` with `compatHtml` you can set `options.skipCompatHtml` to `true`.
		 */
		html: function( expected, actual, optionsOrMsg ) {
			var options = optionsOrMsg instanceof Object ? optionsOrMsg : { message: optionsOrMsg },
				msg = options.message,
				compatHtml = bender.tools && bender.tools.compatHtml;

			if ( !options.skipCompatHtml ) {
				var sortAttributes = ( 'sortAttributes' in options ) ? options.sortAttributes : true,
					fixZWS = ( 'fixZWS' in options ) ? options.fixZWS : true,
					fixNbsp = ( 'fixNbsp' in options ) ? options.fixNbsp : true;

				if ( !compatHtml ) {
					throw new Error( 'Missing bender.tools.compatHtml' );
				}

				expected = compatHtml( expected, options.noInterWS, sortAttributes, fixZWS, options.fixStyles, fixNbsp, options.noTempElements, options.customFilters );
				actual = compatHtml( actual, options.noInterWS, sortAttributes, fixZWS, options.fixStyles, fixNbsp, options.noTempElements, options.customFilters );
			}

			assert.areSame( html_beautify( expected, this._config ), html_beautify( actual, this._config ), msg );
		},

		/**
		 * Compares JavaScript code, but beautifies it before the comparison.
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
