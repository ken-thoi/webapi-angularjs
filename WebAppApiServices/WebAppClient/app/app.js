(function () {
    'use strict';

    var app = angular.module("kenApp", ['ui.router']);

    app.constant("appSetting", {
        apiBaseUrl: "http://localhost:18016/"
    });

    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('');

        $stateProvider
            .state('default', {
                url: '/',
                templateUrl: '/app/components/home/index.html',
                controller: 'HomeCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: '/app/components/home/index.html',
                controller: 'HomeCtrl'
            })
            .state('login', {
                url: '/account/login',
                templateUrl: '/app/components/login/index.html',
                controller: 'LoginCtrl'
            });
    }]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }]);

    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

})();