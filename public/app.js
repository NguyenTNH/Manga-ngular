var MyApp = angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap']);


	MyApp.config(function ($locationProvider, $routeProvider) {
    	$routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCrtl'
      }).
      when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });    
	});
