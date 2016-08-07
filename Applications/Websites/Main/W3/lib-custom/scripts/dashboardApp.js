(function () {
    var dashboardApp = angular.module('dashboardApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/partials/login.html',
                controller: 'loginController as loginModel'
            })
            .state('test', {
                url: '/dashboard',
                templateUrl: '/partials/dashboard.html'
            });

        //injected $location provider into your route provider, setting html 5 mode to true gets rid of the '#?' in your URL
        $locationProvider.html5Mode(true);
    })
})();