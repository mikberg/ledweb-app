'use strict';

angular.module('ledweb.main')
.controller('MainCtrl', function(Led) {
  var ctrl = this;

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

  this.setSound = function() {
    return Led.setSound().success(success).error(error);
  };


  this.refreshMode();
});
