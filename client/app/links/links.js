angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // console.log(Links.getAll());
  // $scope.data.links = Links.getAll();
  Links.getAll()
    .then(function(links) {
      $scope.data.links = links;
    });
});
