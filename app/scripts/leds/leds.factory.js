'use strict';

angular.module('ledweb.leds')
.factory('Led', function($http, Servers) {

  Servers.load();
  var settings = {
    url: Servers.url
  };

  function setUrl(url) {
    settings.url = url;
  }

  function getMode(url, timeout) {
    url = url ? url : settings.url;
    return $http.get(url, {
      timeout: timeout ? timeout : 500
    });
  }

  function setMode(mode, params) {
    return $http.post(settings.url, {
      mode: mode,
      params: params
    });
  }

  function setRGB(hex) {
    var red = parseInt(hex.substr(1, 2), 16) / 255;
    var green = parseInt(hex.substr(3, 2), 16) / 255;
    var blue = parseInt(hex.substr(5, 2), 16) / 255;

    return setMode('rgb', {
      red: red, green: green, blue: blue
    });
  }

  function setRandom() {
    return setMode('rgb', {
      red: Math.random(),
      green: Math.random(),
      blue: Math.random()
    });
  }

  function setSound() {
    return setMode('sound', {});
  }


  return {
    settings: settings,
    setUrl: setUrl,
    getMode: getMode,
    setMode: setMode,
    setRGB: setRGB,
    setRandom: setRandom,
    setSound: setSound
  };
});
