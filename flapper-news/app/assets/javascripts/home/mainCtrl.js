angular.module('flapperNews')
.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
  $scope.title = '';
  $scope.link = '';
  $scope.posts = posts.posts;

  $scope.addPost = function() {
    posts.create({title: $scope.title, upvotes: 0, link: $scope.link});
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    posts.upvote(post);
  };
}])
