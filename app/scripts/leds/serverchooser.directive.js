'use strict';

angular.module('ledweb.leds')
.directive('serverChooser', function() {
  return {
    scope: {},
    templateUrl: 'scripts/leds/serverchooser.directive.html',
    controller: function($scope, Led, Servers) {
      $scope.led = Led;
      $scope.url = Led.settings.url;

      $scope.set = function(url) {
        Led.setUrl(url);
        Servers.url = url;
        Servers.store();
      };
    },
  };
});
