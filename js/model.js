/**
 * Model file for working with data
 */


/**
 * Main Model Object
 */

var model = {};

model.init = function() {
	model.updateLocalStorage( jsonData );
	// model.removeLocalStorage();
	console.log( model.getPosts() );
}

/**
 * Gets post from local storage
 *
 * @return posts {array} an appary of post objects
 */
model.getPosts = function () {
	var posts = model.getLocalStorage();
	return posts;
};


/**
 * Get a single post based on URL slug
 *
 * @param slug {string} The slug for the post
 * @return post {object} Single post
 */
 model.getPost = function (slug) {
 	var posts = model.getLocalStorage();
 	for( i=0, max = posts.length; i < max; i++ ) {
		if( slug === posts[i].slug) {
			return posts[i];
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
	localStorage.setItem( 'vanillaPress', store );
};

/**
 * Deletes data from local storage
 */
model.removeLocalStorage = function() {
	localStorage.removeItem( 'vanillaPress' );
}
