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

app.controller('customersCtrl', function ($scope, $http) {
    $http.get("http://www.runoob.com/try/angularjs/data/Customers_JSON.php")
        .success(function (response) {
            $scope.names = response.records;
        });
});

