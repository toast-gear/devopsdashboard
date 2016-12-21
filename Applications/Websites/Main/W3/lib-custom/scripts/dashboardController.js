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
                $scope.wordWidgetItems = [
                    { sizeX: 2, sizeY: 1, row: 0, col: 0, value: response.data.word + "\n" + "Definition : " + response.data.definition },
                ];
                $scope.standardItems = [
                    { sizeX: 2, sizeY: 1, row: 0, col: 0, value: "Information Panel" },
                    { sizeX: 2, sizeY: 2, row: 0, col: 2, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 0, col: 4, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 0, col: 5, value: "Information Panel" },
                    { sizeX: 2, sizeY: 1, row: 1, col: 0, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 1, col: 4, value: "Information Panel" },
                    { sizeX: 1, sizeY: 2, row: 1, col: 5, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 2, col: 0, value: "Information Panel" },
                    { sizeX: 2, sizeY: 1, row: 2, col: 1, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 2, col: 3, value: "Information Panel" },
                    { sizeX: 1, sizeY: 1, row: 2, col: 4, value: "Information Panel" }
                ];
            });
        });
})();