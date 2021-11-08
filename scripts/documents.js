window.onload = function() {
	jQuery( '#documents' ).DataTable( {
		order: [ [ 0, 'desc' ] ],
		language: {
			url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/uk.json'
		},
		initComplete: function () {
			this.api().columns().every( function ( index ) {
				let column = this;
				if ( 'Тип' == column.header().innerText || 'Підрозділ' == column.header().innerText || 'Дата' == column.header().innerText ) {
					jQuery( column.footer() ).empty();
					let select = jQuery( '<select><option value=""></option></select>' ).appendTo( jQuery( column.footer() ) ).on( 'change', function () {
						var val = $.fn.dataTable.util.escapeRegex(
							jQuery( this ).val()
						);
						column.search( val ? val : '', true, false ).draw();
					} );
					column.data().unique().sort().map( function ( label ) {
						if ( 'Дата' == column.header().innerText ) {
							return label.match( /(?<year>[0-9]{4})[,|-|.| ](?<month>[0-9]{2})[,|-|.| ](?<day>[0-9]{2})/ )[ 1 ];
						} else {
							return label.toLowerCase();
						}
					} ).filter( function( label, position, self ) {
						return self.indexOf( label ) == position;
					} ).each( function ( label ) {
						select.append( '<option value="' + label + '">' + label + '</option>' );
					} );
				}
			} );
		}
	} );
};