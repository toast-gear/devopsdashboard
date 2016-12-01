/*

(function () {
    angular.module('dashboardApp')
        .factory('dataShareFactory', function () {
            return {
                getAllUsers: function () {
                    return [
                        { firstName: 'Jane', lastname: 'Doe' },
                        { firstName: 'Doe', lastname: 'Jane' }
                    ];
                }
            }
        });
});


(function () {
    angular.module('dashboardApp')
        .service('dataShareService', function ($rootScope) {
            dataHandlerService.sendData = function (data) {
                this.data = data;
                $rootScope.$broadcast('data_shared');
            };

            dataHandlerService.getData = function () {
                return receivedData = this.data;
            };
        })
});

(function () {
    angular
        .module('dashboardApp')
            .factory('dataShareFactory', function ($rootScope, $timeout) {
                var dataHandlerservice = {};
                dataHandlerservice.data = null;
                dataHandlerservice.sendData = function (data) {
                    this.data = data;
                    $timeout(function () {
                        $rootScope.$broadcast('data_shared');
                    }, 100);
                };
                dataHandlerservice.getData = function () {
                    return this.data;
                };
                return dataHandlerservice;
            })
});

*/