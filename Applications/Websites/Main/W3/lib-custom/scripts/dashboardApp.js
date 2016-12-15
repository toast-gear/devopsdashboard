(function () {
    var dashboardApp = angular.module('dashboardApp', ['ui.router', 'gridster'])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('root', {
                    url: '/',
                    templateUrl: '/partials/login.html',
                    controller: 'loginController as loginModel'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: '/partials/dashboard.html',
                    controller: 'dashboardController as dashboardController'
                });

            // injected $location provider into your route provider, setting html 5 mode to true gets rid of the '#?' in your URL
            // we want false otherwise routing breaks
            $locationProvider.html5Mode(false);
        })
        .service('authenticationService', function authenticationService() {
            var dataService = this;
            dataService.authentication = 'Default';
        });
})();