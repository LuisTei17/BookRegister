angular.module('techBlog').controller("homeController", function($scope, Postagem) {

  $scope.posts = [];
  $scope.verClickado = null;
  $scope.mensagem = {msg: ""};
  $scope.filtro = "";


  $scope.vermais = function(post){
    post.limite = null;
  };

  $scope.vermenos = function(post) {
    post.limite = 200;
  };

  function buscaPosts() {
    Postagem.query(
      function(posts) {
        $scope.posts = posts;
        angular.forEach($scope.posts, function(post) {
          post.limite = 200;
        });
      },function(erro){
        $scope.mensagem = {
          msg: erro
        };
        console.log(erro);
      }
    );
  }
  buscaPosts();

  $scope.deleta = function(post) {
    Postagem.delete({id: post._id},
      buscaPosts,
      function(erro) {
        $scope.mensagem = {
          msg: "Não foi possivel remover o erro"
        };
        console.log(erro);
      }
    );
  };

})
