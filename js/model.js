/**
 * Model file for working with data
 */


/**
 * Main Model Object
 */

var model = {};

model.init = function() {
	model.updateLocalStorage( data );
	// model.removeLocalStorage();
	console.log( model.getPage('about') );
}

/**
 * Gets post from local storage
 *
 * @return posts {array} an appary of post objects
 */
model.getPosts = function () {
	var posts = model.getLocalStorage().posts;
	return posts;
};


/**
 * Get a single post based on URL slug
 *
 * @param slug {string} The slug for the post
 * @return post {object} Single post
 */
 model.getPost = function (slug) {
 	var posts = model.getLocalStorage().posts;
 	for( i=0, max = posts.length; i < max; i++ ) {
		if( slug === posts[i].slug) {
			return posts[i];
		}
	}

	return null;
 };


 /**
  * Gets pages from local storage
  *
  * @return pages {array} an appary of page objects
  */
 model.getPages = function () {
 	var pages = model.getLocalStorage().pages;
 	return pages;
 };


 /**
  * Get a single page based on URL slug
  *
  * @param slug {string} The slug for the page
  * @return page {object} Single page
  */
  model.getPage = function (slug) {
  	var pages = model.getLocalStorage().pages;
  	for( i=0, max = pages.length; i < max; i++ ) {
 		if( slug === pages[i].slug) {
 			return pages[i];
 		}
 	}

 	return null;
  };

 /**
  * Gets content from local storage
  *
  * @return store {object} Object or array of objects of site data
  */

model.getLocalStorage = function() {
	return JSON.parse( localStorage.getItem( 'vanillaPress' ) );
}

 /**
  * Save temporary store to local storage
  *
  * @return store {string} JSON string of data to store
  */

model.updateLocalStorage = function( store ) {
	//TODO: could add a conditional to check if we're getting a string
	localStorage.setItem( 'vanillaPress', JSON.stringify( store ) );
};

/**
 * Deletes data from local storage
 */
model.removeLocalStorage = function() {
	localStorage.removeItem( 'vanillaPress' );
}
