(function () {
    angular.module('dashboardApp')
        .controller('dashboardController', function ($rootScope, $scope, $window, authenticationService) {
            if (authenticationService.authentication.isAuthenticated === true) {
                $rootScope.enableNavBar = true;
            }
            else
            {
                $window.location.href = '/'
            }

            $scope.standardItems = [
                { sizeX: 2, sizeY: 1, row: 0, col: 0 },
                { sizeX: 2, sizeY: 2, row: 0, col: 2 },
                { sizeX: 1, sizeY: 1, row: 0, col: 4 },
                { sizeX: 1, sizeY: 1, row: 0, col: 5 },
                { sizeX: 2, sizeY: 1, row: 1, col: 0 },
                { sizeX: 1, sizeY: 1, row: 1, col: 4 },
                { sizeX: 1, sizeY: 2, row: 1, col: 5 },
                { sizeX: 1, sizeY: 1, row: 2, col: 0 },
                { sizeX: 2, sizeY: 1, row: 2, col: 1 },
                { sizeX: 1, sizeY: 1, row: 2, col: 3 },
                { sizeX: 1, sizeY: 1, row: 2, col: 4 }
            ];
        });
})();