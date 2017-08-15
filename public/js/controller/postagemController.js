angular.module('techBlog').controller('postagemController', function($scope, Postagem, $routeParams, $location, $filter) {

  if($routeParams.id) {
    Postagem.get({id:$routeParams.id},
      function(postagem) {
        $scope.postagem = postagem;
      },
      function(erro) {
        $scope.mensagem = {
          msg: "Postagem inválida"
        };
        console.log(erro);
      })
  } else {
    $scope.postagem = new Postagem();
    $scope.postagem.data = $filter('date')(new Date(), 'dd/MM/yyyy');
  }

  $scope.posta = function(frm) {
    console.log("Função chamada");
    $scope.postagem.$save().then(function(){
      $location.path('/postagem')
      $scope.mensagem = {
        msg: "Salvo com sucesso"
      };
      $scope.postagem = new Postagem();
    }).catch(function(erro){
      $scope.mensagem = {
        msg: "Erro ao salvar"
      };
      console.log(erro);
    })
  }

})
