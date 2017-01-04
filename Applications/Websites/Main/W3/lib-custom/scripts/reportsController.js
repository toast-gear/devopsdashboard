(function () {
    angular.module('dashboardApp')
        .controller('reportsController', function ($rootScope, $window, localStorageService) {
            if (localStorageService.get('isAuthenticated') !== true) {
                $window.location.href = '/';
            }
            else {
                $rootScope.enableNavBar = true;
            }
        });
})();