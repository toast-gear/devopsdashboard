(function () {
    angular.module('dashboardApp')
        .controller('loginController', function ($scope, $http, $location, $state, dataService) {

            var NavBar = false;
            var loginModel = this;
            loginModel.domain = 'sudo';
            loginModel.username = 'sudo';
            loginModel.password = 'sudo';
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root, loginModel)
                    .success(function (result) {
                        if (result.isAuthenticated === true) {
                            dataService.setObject(result);
                            $location.path('/dashboard');
                        }
                    });
            };
        });
})();