( function () {

	let $list = jQuery( '#nav-list' );
	let $burger = jQuery( '#nav-burger' );

	function  Toggle() {
		$list.toggleClass( 'active' );
	}

	$burger.on( 'click', Toggle );

} )();