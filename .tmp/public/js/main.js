/*global require */

'use strict';

window.name = 'NG_DEFER_BOOTSTRAP!';

require.config({
  'baseUrl': '/js',
  'paths': {
    'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular',
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
    'bootstrap': '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
  },
  'shim': {
    'angular': {
      'exports': 'angular'
    },
    'bootstrap': {
      'deps': ['jquery']
    },
    'socket.io': {
      'exports': 'io'
    },
    'sails.io': {
      'deps': ['socket.io'],
      'exports': 'io'
    }
  }
});

require([
  'angular',
  'app',
  'bootstrap'
], function (angular, app) {

  angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app.name]);
  });

});