'use strict';

/**
 * @ngdoc overview
 * @name rebeccamurphygithubioApp
 * @description
 * # rebeccamurphygithubioApp
 *
 * Main module of the application.
 */
angular
  .module('rebeccamurphygithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
