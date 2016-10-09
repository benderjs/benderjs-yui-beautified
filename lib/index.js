var path = require( 'path' ),
	files = [
		// path.resolve
		path.join( __dirname, '../node_modules/js-beautify/js/lib/beautify.js' ),
		path.join( __dirname, '../node_modules/js-beautify/js/lib/beautify-css.js' ),
		path.join( __dirname, '../node_modules/js-beautify/js/lib/beautify-html.js' ),
		path.join( __dirname, '/client.js' )
	];

module.exports = {
	name: 'bender-pagebuilder-yui-beautified',
	files: files,

	build: function( data ) {
		var head = [ '<head>\n', '<title>', data.id, '</title>\n' ];

			files.forEach( function( file ) {
				head.push(
					'<script src="',
					path.join( '/plugins/', file ).split( path.sep ).join( '/' ),
					'"></script>\n'
				);
			} );

		head.push( '\n</head>' );

		data.parts.push( head.join( '' ) );

		return data;
	}
};
