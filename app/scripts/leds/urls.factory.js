'use strict';

angular.module('ledweb.leds')
.factory('Servers', function($window) {
  var DEFAULT = 'http://localhost:5000/api';
  var values = {

  };

  function store() {
    $window.localStorage.values = angular.toJson(values);
  }

  function load() {
    var loaded = angular.fromJson($window.localStorage.values);
    values.url = loaded && loaded.url ? loaded.url : DEFAULT;
  }

  load();

  return angular.extend(values, {
    store: store,
    load: load,
  });
});
