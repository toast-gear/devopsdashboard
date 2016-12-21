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
                    $rootScope.credentialModel = {
                        domain: loginController.domain,
                        password: loginController.password,
                        userName: loginController.username
                    };
                    httpAuthenticationService.authenticateDomainUser().then(function (response) {
                        if (response.data.isAuthenticated === true) {
                            localStorageService.set('isAuthenticated', true);
                            $location.path('/dashboard');
                        }
                    });
                };
            }
        });
})();