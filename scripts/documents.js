window.onload = function() {
	jQuery( '#documents' ).DataTable( {
		order: [ [ 0, 'desc' ] ],
		language: {
			url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/uk.json'
		},
		initComplete: function () {
			this.api().columns().every( function ( index ) {
				let column = this;
				let options = [];
				let select = null;
				if ( 'Тип' == column.header().innerText || 'Підрозділ' == column.header().innerText || 'Дата' == column.header().innerText ) {						
					column.data().unique().sort().map( function ( label ) {
						label = label.replace( /(<([^>]+)>)/ig, '' ).trim();
						if ( 'Дата' == column.header().innerText ) {
							options.push( label.match( /(?<year>[0-9]{4})[,|-|.| ](?<month>[0-9]{2})[,|-|.| ](?<day>[0-9]{2})/ )[ 1 ] );
						} else {
							label.toLowerCase().split( ',' ).map( function ( label ) {
								options.push( label.trim() );
							} );
						}
					} );
					options = options.filter( function( value, position, options ) {
						return options.indexOf( value ) == position;
					} );
					if ( options.length > 1 ) {
						jQuery( column.footer() ).empty();
						select = jQuery( '<select><option value=""></option></select>' ).appendTo( jQuery( column.footer() ) ).on( 'change', function () {
							let val = $.fn.dataTable.util.escapeRegex(
								jQuery( this ).val()
							);
							column.search( val ? val : '', true, false ).draw();
						} );
						options.map( function ( value ) {
							select.append( '<option value="' + value + '">' + value + '</option>' );
						} );
					}
				}
			} );
		}
	} );
};