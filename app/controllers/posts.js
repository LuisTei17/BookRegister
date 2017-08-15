var ID_POST_INC = 0;


module.exports = function(app) {
  var Post = app.models.post;
  var controller = {};
  console.log("Controle posts");
  controller.listaPostagens = function(req, res) {
    Post.find(function(err, posts) {
        res.json(posts);
    })
  };

  controller.obtemPost = function(req, res) {
    var idPost = req.params.id;
    console.log(idPost + " _id server");
    var post = Post.findOne({
      _id: idPost
    }, function(err, post) {
      if(post) {
        res.json(post);
      } else {
        res.status(404).send("Postagem não encontrada");
      }
    })
  };

  controller.removePost = function(req, res) {
    var _id= req.params.id;
    Post.remove({"_id": _id}).exec().then(function(){
      res.end();
    }, function(erro){
      res.status(500).json(erro);
    })
  }

  controller.posta = function(req, res) {
    console.log(req.body);
    var _id = req.body._id;
    if(_id) {
      Post.findByIdAndUpdate(_id, req.body).exec().then(function(post){
        res.json(post)
      }, function(erro){
        console.log(erro);
        res.status(500).json(erro);
      })
    } else {
      Post.create(req.body).then(function(post){
        res.status(201).json(post);
      },function(erro){
        console.log(erro);
        res.status(500).json(erro);
      });
    }
  };
  return controller;
}
