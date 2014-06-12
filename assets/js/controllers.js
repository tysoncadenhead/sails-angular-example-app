define(function (require) {
  
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
  
  Controllers.controller('ListCtrl', require('controllers/listCtrl'));
  
  return Controllers;
  
});