angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  // console.log(Links.getAll());
  // $scope.data.links = Links.getAll();
  // $scope.data.links = links;
  Links.getAll()
    .then(function(links) {
      $scope.data.links = links;
    });
}])
.directive('shortenedLink', function() {
  return {
    template: '<div class="link" ng-repeat="link in data.links | orderBy:\'-visits\' | filter:searchText">\
      <img src="../assets/redirect_icon.png"/>\
      <div class="info">\
        <div class="visits"><span class="count">{{ link.visits }}</span> visits</div>\
        <div class="title">{{ link.title }}</div>\
        <div class="original">{{ link.baseUrl }}</div>\
        <a href="{{ link.code }}">{{ link.url + \'/\' + link.code }}</a>\
      </div>\
    </div>'
  };
});