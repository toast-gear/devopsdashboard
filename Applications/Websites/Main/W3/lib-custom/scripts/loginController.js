(function () {
    angular.module('dashboardApp')
        .controller('loginController', function ($rootScope, $location, localStorageService, httpAuthenticationService) {
            $rootScope.enableNavBar = false;
            if (localStorageService.isSupported !== true) {
                console.log('YOUR BROWSER SUCKS GET A NEWER ONE, NEED TO IMPLEMENT SOME SORT OF PAGE / CONTROL DISABLE FOR THIS');
                $rootScope.supportedBrowser = false;
            }
            else {
                var loginController = this;
                loginController.domain = 'sudo';
                loginController.password = 'sudo';
                loginController.username = 'sudo';
                loginController.submit = function () {
                    httpAuthenticationService.testService();
                    if (httpAuthenticationService.authenticateDomainUser() === true) {
                        localStorageService.set('isAuthenticated', true);
                        $location.path('/dashboard');
                    }
                };
            }

            //loginModel.loginFunction = function () {
            //    var root = 'http://api.devopsdashboard.com/api/authentication/authenticatedomainuser';
            //    $http.post(root, loginModel)
            //        .success(function (result) {
            //            if (result.isAuthenticated === true) {
            //                // THIS IS NOW POINTLESS CODE, KEEPING TO LEARN
            //                authenticationService.authenticateUser();
            //                $rootScope.isAuthenticated = true;
            //                // THIS IS NOW POINTLESS CODE, KEEPING TO LEARN

            //                localStorageService.set('isAuthenticated', true);
            //                $location.path('/dashboard');
            //            }
            //        });
            //};
        });
})();