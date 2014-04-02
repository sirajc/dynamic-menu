'use strict';

/* App Module */

var rndApp = angular.module('rndApp', [
  'ngRoute',
  'dynamicMenu'
]);

rndApp.config(['$routeProvider','$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/l1', {
        templateUrl: 'views/l1.html',
        controller : 'SimpleController1'
      }).
      when('/l2', {
        templateUrl: 'views/l2.html',
        controller : 'SimpleController1'
      }).
      when('/r1', {
        templateUrl: 'views/r1.html',
        controller : 'SimpleController2'
      }).
      when('/r2', {
        templateUrl: 'views/r2.html',
        controller : 'SimpleController2'
      }).
      when('/r3', {
        templateUrl: 'views/r3.html',
        controller : 'SimpleController2'
      }).
      otherwise({
        redirectTo: '/r1'
      });
      
    $locationProvider.html5Mode(false).hashPrefix('app');
  }]);

rndApp.controller('SimpleController1', ['$scope',
  function($scope) {
    $scope.name = "Left Navigation in Dynamic Menu";
  }]);
  
rndApp.controller('SimpleController2', ['$scope',
  function($scope) {
    $scope.name = "Right Navigation in Dynamic Menu";
  }]);