/*global define */

define([
  'angular',
  'sails.io',
  'controllers'
], function (angular, io) {

  'use strict';

  var socket = io.connect(), app;

  socket.on('connect', function socketConnected() {
    console.log('Socket is now connected');
  });

  app = angular.module('todoIt', [
    'controllers'
  ]);

  return app;

});
