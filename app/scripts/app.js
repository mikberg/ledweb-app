'use strict';

/**
 * @ngdoc overview
 * @name ledwebApp
 * @description
 * # ledwebApp
 *
 * Main module of the application.
 */
angular
  .module('ledweb', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'ledweb.main'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
