(function () {
    angular.module('dashboardApp')
        .controller('loginController', function ($scope, $http, $location) {

            var loginModel = this;

            loginModel.domain = 'REDWARE';
            loginModel.username = '';
            loginModel.password = '';
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root, loginModel)
                    .success(function (result) {
                        console.log(result);
                        if (result.isAuthenticated === true) {
                            $location.path('/dashboard')
                        }
                    });
            };

            /*
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root,loginModel)
                    .success(function (result) {
                        console.log(result);
                    });
            }; 


            loginModel.username = '';
            loginModel.password = '';
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root,loginModel)
                    .success($location.path('/dashboard'));
            };

            */
        });
})();