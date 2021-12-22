/**
 * Кнопка мобильного меню
 * */
( function () {

	let $list = jQuery( '#nav-list' );
	let $burger = jQuery( '#nav-burger' );

	function  Toggle() {
		$list.toggleClass( 'active' );
	}

	$burger.on( 'click', Toggle );

} )();


/**
 * Стили фильтра приказов
 * */
( function () {

	function ControlStyleToggle() {
		if ( jQuery( this ).val().length ) {
			jQuery( this ).addClass( 'changed' );
		} else {
			jQuery( this ).removeClass( 'changed' );
		}
	}

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


/**
 * Копировать в буфер
 * */
( function () {

	let $body = jQuery( 'body' );

	function Copy( event ) {
		event.preventDefault();
		let $button = jQuery( event.target );
		let $textarea = jQuery( '<textarea>' );
		let link = $button.attr( 'data-link' );
		let label = $button.text();
		let success = $button.attr( 'data-success' );
		console.log( $button );
		if ( typeof link !== 'undefined' && link !== false ) {
			$body.append( $textarea );
			$textarea.val( $button.attr( 'data-link' ) );
			$textarea.select();
			document.execCommand( 'copy' );
			$textarea.remove();
			console.log( 'copy' );
			$body.off( 'click', 'button.link', Copy );
			if ( typeof success !== 'undefined' && success !== false ) {
				$button.text( success );
				setTimeout( function () {
					$button.text( label );
					$body.on( 'click', 'button.link', Copy );
				}, 1500 );
			}
		}
	}

	$body.on( 'click', 'button.share', Copy );

} )();