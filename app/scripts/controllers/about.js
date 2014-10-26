'use strict';

/**
 * @ngdoc function
 * @name ledwebAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ledwebAppApp
 */
angular.module('ledwebAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
