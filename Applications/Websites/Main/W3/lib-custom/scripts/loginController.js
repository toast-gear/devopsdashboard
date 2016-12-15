(function () {
    angular.module('dashboardApp')
        .controller('loginController', function ($rootScope, $http, $location, $state, authenticationService) {

            $rootScope.enableNavBar = false;
            var loginModel = this;
            loginModel.domain = 'sudo';
            loginModel.username = 'sudo';
            loginModel.password = 'sudo';
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root, loginModel)
                    .success(function (result) {
                        if (result.isAuthenticated === true) {
                            console.log('loginController Result');
                            console.log(result);
                            authenticationService.authentication = result;
                            $location.path('/dashboard');
                        }
                    });
            };
        });
})();