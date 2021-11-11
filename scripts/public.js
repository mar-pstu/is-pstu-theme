( function () {

	let $list = jQuery( '#nav-list' );
	let $burger = jQuery( '#nav-burger' );

	function  Toggle() {
		$list.toggleClass( 'active' );
	}

	function ControlStyleToggle() {
		if ( jQuery( this ).val().length ) {
			jQuery( this ).addClass( 'changed' );
		} else {
			jQuery( this ).removeClass( 'changed' );
		}
	}

	$burger.on( 'click', Toggle );
	jQuery( document ).on( 'change', 'select, input, trextarea', ControlStyleToggle );
	jQuery( document ).on( 'keyup', 'input, trextarea', ControlStyleToggle );
	jQuery( document ).ready( function () {
		jQuery( 'select, input, trextarea' ).each( function ( index, control ) {
			if ( jQuery( control ).val().length ) {
				jQuery( control ).addClass( 'changed' );
			}
		} );
	} );

} )();