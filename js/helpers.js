/**
 * Helper file for extra function
 */

var helpers = {};

helpers.getMainMenuEl = function() {
	return document.querySelector( '#mainNav ul' );
};

helpers.createMenuItem = function( contentObj ) {
	var menuItemEl = document.createElement( 'li' );

	menuItemEl.appendChild( helpers.createLink( contentObj ) );

	return menuItemEl;
};

helpers.createLink = function( contentObj ) {
	var linkEl = document.createElement( 'a' ),
		linkTile = document.createTextNode( contentObj.title );


	linkEl.appendChild( linkTile );

	if( 'home' === contentObj.slug ) {
		linkEl.href = '#';
	} else {
		linkEl.href = '#' + contentObj.slug;
	}

	return linkEl;

};

helpers.getPageTitleEl = function() {
	return document.getElementById( 'pageTitle' );
};

helpers.getPageContentEl = function() {
	return document.getElementById( 'pageContent' );
};
