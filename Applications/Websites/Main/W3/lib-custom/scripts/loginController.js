(function () {
    angular.module('dashboardApp')
        .controller('loginController', function ($scope, $http) {

            var loginModel = this;

            loginModel.domain = 'REDWARE';
            loginModel.username = '';
            loginModel.password = '';
            loginModel.loginFunction = function () {
                var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
                $http.post(root,loginModel.credObj)
                    .success(function (result) {
                        console.log(result);
                    });
                //$http.post(root, loginModel.credObj)
                //    .success(function (result) {
                //        console.log(result);
                //    });
            };

            /* This does a successfull get 

            loginModel.loginFunction = function () {
                var root = 'http://localhost:57023/api/authentication/authenticatedomainuser';
                $http.get(root)
                    .success(function (result) {
                        console.log(result);
                    });
            };

            */
        });
})();