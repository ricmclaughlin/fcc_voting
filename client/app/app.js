'use strict';

angular.module('fccVotingApp', ['fccVotingApp.auth', 'fccVotingApp.admin', 'fccVotingApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
