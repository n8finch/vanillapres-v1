/**
 * View file for displaying content
 */

/**
 * Calls initial View methods
 */

view.init = function() {
	console.log('before');
	view.createMainMenu();
	console.log('after');

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
 * Load single blog or page based on URL
 *
 * @param slug {string} Post to create markup
 */

view.loadSingleContent = function( slug ) {

	var contentObj = model.getPost( slug )
		titleEl = helpers.getPageTitleEl(),
		contentEl = helpers.getPageContentEl();

	//TODO: refactor these conditionals to model
	if( null === contentObj ) {
		contentObj = model.getPage( slug );
	}

	if( null === contentObj ) {
		contentObj = {
			title: '404 Error',
			content: 'Content not found'
		}
	}
	titleEl.innerHTML = contentObj.title;
	contentEl.innerHTML = contentObj.content;

};

/**
 * Create Main Menu
 */

view.createMainMenu = function() {

	var pages = model.getPages(),
	menuMarkup = document.createDocumentFragment(),
	mainMenuEl = helpers.getMainMenuEl();
	console.log(mainMenuEl);

	for (var i = 0, max = pages.length; i < max; i++) {
		menuMarkup.appendChild( helpers.createMenuItem( pages[i] ) )
	}

	mainMenuEl.appendChild( menuMarkup );
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
