'use strict';

angular.module('fccVotingApp.auth', ['fccVotingApp.constants', 'fccVotingApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
