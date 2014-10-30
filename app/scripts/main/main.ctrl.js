'use strict';

angular.module('ledweb.main')
.controller('MainCtrl', function(Led, $location, Servers) {
  var ctrl = this;

  this.led = Led;

  var search = $location.search();
  if (search.url) {
    Led.setUrl(search.url);
    Servers.url = search.url;
    Servers.store();
  }

  function success(status) {
    ctrl.status = status;
  }

  function error(err) {
    console.error(err);
  }

  this.setRandom = function() {
    return Led.setRandom().success(success).error(error);
  };

  this.setRGB = function(hex) {
    return Led.setRGB(hex).success(success).error(error);
  };

  this.refreshMode = function() {
    return Led.getMode().success(success).error(error);
  };

  this.setSound = function(params) {
    return Led.setSound(params).success(success).error(error);
  };

  this.setOff = function() {
    return Led.setOff().success(success).error(error);
  };


  this.refreshMode();
});
