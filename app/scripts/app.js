'use strict';

/**
 * @ngdoc overview
 * @name installerSpaApp
 * @description
 * # installerSpaApp
 *
 * Main module of the application.
 */
angular
  .module('installerSpaApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
	  templateUrl: 'views/contact.html',
	  controller: 'ContactCtrl',
	  controllerAs: 'about'
      })
      .when('/install', {
	  templateUrl: 'views/install.html',
	  controller: 'InstallCtrl',
	  controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
