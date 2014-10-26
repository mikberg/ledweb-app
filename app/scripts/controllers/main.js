'use strict';

/**
 * @ngdoc function
 * @name ledwebAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ledwebAppApp
 */
angular.module('ledwebAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
