(function () {
    angular.module('dashboardApp')
        .controller('dashboardController', function ($rootScope, $scope, $window, $http, localStorageService) {
            if (localStorageService.get('isAuthenticated') !== true) {
                $window.location.href = '/';
            }
            else {
                $rootScope.enableNavBar = true;
            }
            $http.get('http://api.devopsdashboard.com/api/dashboard/widgetword').then(function (response) {
                console.log(response);

                // Construct grid
                $scope.standardItems = [{
                    sizeX: 2,
                    sizeY: 1,
                    row: 0,
                    col: 0,
                    value: response.data.word + "\n" + "Definition : " + response.data.definition
                }];
            });
        });
})();

// GENERIC GRID
//$scope.standardItems = [
//    { sizeX: 2, sizeY: 1, row: 0, col: 0, title: "TEST", content: "TEST" },
//    { sizeX: 2, sizeY: 2, row: 0, col: 2 },
//    { sizeX: 1, sizeY: 1, row: 0, col: 4 },
//    { sizeX: 1, sizeY: 1, row: 0, col: 5 },
//    { sizeX: 2, sizeY: 1, row: 1, col: 0 },
//    { sizeX: 1, sizeY: 1, row: 1, col: 4 },
//    { sizeX: 1, sizeY: 2, row: 1, col: 5 },
//    { sizeX: 1, sizeY: 1, row: 2, col: 0 },
//    { sizeX: 2, sizeY: 1, row: 2, col: 1 },
//    { sizeX: 1, sizeY: 1, row: 2, col: 3 },
//    { sizeX: 1, sizeY: 1, row: 2, col: 4 }
//];