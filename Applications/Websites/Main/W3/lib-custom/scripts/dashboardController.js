(function () {
    angular.module('dashboardApp')
        .controller('dashboardController', function ($rootScope, $scope, $window, localStorageService, authenticationService) {

            // THIS IS NOW POINTLESS CODE, KEEPING TO LEARN
            console.log('authenticationService result below');
            console.log(authenticationService.authenticateUser);
            console.log('$rootScope result below');
            console.log($rootScope.isAuthenticated);
            // THIS IS NOW POINTLESS CODE, KEEPING TO LEARN

            if (localStorageService.get('isAuthenticated') !== true) {
                $window.location.href = '/';
            }
            else
            {
                $rootScope.enableNavBar = true;
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