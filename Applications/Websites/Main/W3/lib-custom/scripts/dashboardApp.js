(function () {
    var dashboardApp = angular.module('dashboardApp', ['ui.router', 'gridster', 'LocalStorageModule', 'authenticationModule'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('root', {    
                    url: '/',
                    templateUrl: '/partials/login.html',
                    controller: 'loginController as loginController'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: '/partials/dashboard.html',
                    controller: 'dashboardController as dashboardController'
                })
                .state('reports', {
                    url: '/reports',
                    templateUrl: '/partials/reports.html',
                    controller: 'reportsController as reportsController'
                });

            // injected $location provider into your route provider, setting html 5 mode to true gets rid of the '#?' in your URL
            // we want false otherwise routing breaks
            $locationProvider.html5Mode(false);
        })
        .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
            localStorageServiceProvider
                .setPrefix('dashboardApp_')
                .setStorageType('sessionStorage');
        }]);
})();