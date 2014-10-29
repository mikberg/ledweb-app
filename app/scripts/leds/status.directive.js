'use strict';

angular.module('ledweb.leds')
.directive('status', function(Led) {
  return {
    templateUrl: 'scripts/leds/status.directive.html',
    scope: {
      server: '=',
      validated: '='
    },
    link: function(scope) {
      function validate(server) {
        scope.validated = undefined;
        Led.getMode(server).success(function(status) {
          scope.validated = true;
          scope.status = status;
        }).error(function() {
          console.log('error');
          scope.validated = false;
          scope.status = {};
        });
      }

      scope.$watch(function() {
        return scope.server;
      }, function(server) {
        if (server) {
          validate(server);
        }
      }, true);
    }
  };
});
