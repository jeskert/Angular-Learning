'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

app.controller('customersCtrl', function($scope, $http) {
    $http.get("/customer.json")
        .success(function (response) {$scope.names = response.records;})
});

app.controller('myCtrl', function ($scope) {
    $scope.count = 0;
});

app.controller('personCtrl', function ($scope) {
    $scope.person = {
        firstName: "John",
        lastName: "Doe"
    };
    $scope.myVar = true;
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    };
});