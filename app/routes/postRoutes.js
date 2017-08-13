
module.exports = function(app) {
  var controller = app.controllers.posts;

  app.route('/postagem').get(controller.listaPostagens).post(controller.posta);
  app.route('/postagem/:id').get(controller.obtemPost).delete(controller.removePost);
}
