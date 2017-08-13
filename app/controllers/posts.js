var ID_POST_INC = 0;

var posts = [];

module.exports = function() {
  var controller = {};
  console.log("Controle posts");
  controller.listaPostagens = function(req, res) {
    res.json(posts);
  };

  controller.obtemPost = function(req, res) {
    var idPost = req.params.id;
    console.log(idPost + " id server");
    console.log(posts);
    var post = posts.filter(function(post) {

      console.log("a" + post._id);
      return post._id == idPost;
    })[0];
    post ?
      res.json(post):
    res.status(404).send("Postagem não encontrada");
  };

  controller.removePost = function(req, res) {
    var idPost = req.params.id;
    console.log(idPost);
    posts = posts.filter(function(post) {
      return post._id != idPost;
    });
    res.status(204).end();
  }

  controller.posta = function(req, res) {
    console.log(req.body);
    var post = req.body;
    console.log(post);
    console.log("hmmmmmmmm");
    console.log(post._id);
    post = post._id ?
      atualiza(post) :
    adiciona(post);
    res.json(post);
  }

  function adiciona(postNovo) {
    postNovo._id = ++ID_POST_INC;
    posts.push(postNovo);
    return postNovo;
  }
  function atualiza(postAlterar) {
      posts = posts.map(function(post) {
        if(post._id == postAlterar._id) {
          post = postAlterar;
        }
        return post;
      });
      return postAlterar;
  }
  return controller;
}
