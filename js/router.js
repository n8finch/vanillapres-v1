/**
 * Router for managing url changes
 */

/**
 * Main router object
 */
var router = {};

/**
 * Initialize the router
 */
router.init = function() {

	router.loadContent();
	router.listenPageChange();

};


/**
 * Gets the slug from the URL
 *
 * @return slug {string} Slug for content
 */
router.getSlug = function() {
	var slug = window.location.hash;

	if( "" === slug ) {
		return null;
	} else {
		return slug.substring( 1 );
	}
}

/**
 * Listener function for URL changes
 */

router.listenPageChange = function() {
	window.addEventListener( 'hashchange', router.loadContent, false );
}


/**
 * Load Content based on URL
 */

router.loadContent = function() {
	var slug = router.getSlug();

	//First, clear the content
	view.clearContent();

	if (null === slug ) {
		view.loadSingleContent( 'home' );
	} else if( 'blog' === slug ) {
		view.loadBlogPosts();
	} else {
		view.loadSingleContent( slug );
	}
}
