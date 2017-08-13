var app = angular.module('techBlog', ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider.when('/postagem', {
    templateUrl: "parciais/home.html",
    controller: "homeController"
  });

  $routeProvider.when('/postagens/:id', {
    templateUrl: "parciais/postagem.html",
    controller: "postagemController"
  })


  $routeProvider.when('/postagens', {
    templateUrl: "parciais/postagem.html",
    controller: "postagemController"
  })

  $routeProvider.otherwise({
    redirectTo: "/postagem"
  });
})
