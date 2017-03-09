/**
 * View file for displaying content
 */

/**
 * Calls initial View methods
 */

view.init = function() {

}


/**
 * Gets blog posts and appends them to the page.
 */

view.loadBlogPosts = function() {

	var posts = model.getPosts(),
		postsMarkup = document.createDocumentFragment(),
		primaryContentEl = helpers.getPageContentEl();

	for (var i=0, max = posts.length; i < max; i++) {
		postsMarkup.appendChild( view.createPostMarkup( posts[i] ) );
	}

	primaryContentEl.appendChild( postsMarkup );
};


/**
 * Load single blog post
 *
 * @param slug {string} Post to create markup
 */

view.loadBlogPost = function( slug ) {

	var post = model.getPost( slug )
		titleEl = helpers.getPageTitleEl(),
		contentEl = helpers.getPageContentEl();

	titleEl.innerHTML = post.title;
	contentEl.innerHTML = post.content;

};

/**
 * Creates Markup for Blog Posts
 *
 * @param object {post} Post to create markup for
 * @return object {articleEl} Final post markup
 */

view.createPostMarkup = function( post ) {
	var articleEl = document.createElement( 'article' ),
		titleEl = document.createElement( 'h3' ),
		titleLink = document.createElement( 'a' ),
		titleText = document.createTextNode( post.title ),
		contentEl = document.createElement( 'div' );

	//Build header
	titleLink.appendChild( titleText );
	titleLink.href = '#' + post.slug;
	titleEl.appendChild( titleLink );
	console.log( titleEl );

	//Build Content
	contentEl.appendChild( document.createTextNode( post.content ) );

	//Build Article
	articleEl.appendChild( titleEl );
	articleEl.appendChild( contentEl );

	return articleEl;

};


/**
 * Clear Title and Main Content from Page
 */

view.clearContent = function() {
	var titleEl = helpers.getPageTitleEl(),
		contentEl = helpers.getPageContentEl();

	titleEl.innerHTML = '';
	contentEl.innerHTML = '';
};
