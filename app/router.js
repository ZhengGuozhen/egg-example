'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  /*
  RESTful 风格的 URL 定义
  Method	Path	Route Name	Controller.Action
  GET	/posts	posts	app.controllers.posts.index
  GET	/posts/new	new_post	app.controllers.posts.new
  GET	/posts/:id	post	app.controllers.posts.show
  GET	/posts/:id/edit	edit_post	app.controllers.posts.edit
  POST	/posts	posts	app.controllers.posts.create
  PUT	/posts/:id	post	app.controllers.posts.update
  DELETE	/posts/:id	post	app.controllers.posts.destroy
  */

  // RESTful API demo
  router.resources('topics', '/api/v2/topics', 'topics');

  router.get('/api/demo', controller.demo.index);

};
