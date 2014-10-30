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

  function setOff() {
    return setMode('off', {});
  }

  function setRGB(params) {
    return setMode('rgb', params);
  }

  function setRandom() {
    return setMode('rgb', {
      red: Math.random(),
      green: Math.random(),
      blue: Math.random()
    });
  }

  function setSound(params) {
    return setMode('sound', params);
  }


  return {
    settings: settings,
    setUrl: setUrl,
    getMode: getMode,
    setMode: setMode,
    setRGB: setRGB,
    setRandom: setRandom,
    setSound: setSound,
    setOff: setOff
  };
});
