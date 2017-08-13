angular.module('techBlog').factory('Postagem', function($resource) {
  return $resource('/postagem/:id');
})
