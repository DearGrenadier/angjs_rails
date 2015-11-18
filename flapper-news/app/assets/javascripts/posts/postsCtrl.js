angular.module('flapperNews')
.controller('PostsCtrl', [
'$scope',
'posts',
'post',
function($scope, posts, post){
  $scope.post = post.post;

  $scope.addComment = function(){
    posts.addComment($scope.post.id, {
      body: $scope.body,
      upvotes: 0
    }).success(function(data) {
      $scope.post.comments.push(data.comment);
    });
    $scope.body = '';
  };

  $scope.upvoteComment = function(comment) {
    posts.upvoteComment($scope.post, comment).success(function() {
      comment.upvotes++;
    });
  }

}])
