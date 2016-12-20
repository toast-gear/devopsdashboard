(function() {
    angular
        .module('authenticationModule')
        .service('httpAuthenticationService', httpAuthenticationService);

    httpAuthenticationService.$inject = ['$http', '$log'];

    function httpAuthenticationService($http, $log, loginController) {
        var httpAuthenticationService = {
            testService: testService,
            authenticateDomainUser: authenticateDomainUser
        };

        return httpAuthenticationService;

        function testService() {
            $log.debug('httpAuthenticationService testService ran!');
            $log.debug(loginController);

        }

        function authenticateDomainUser() {
            $log.debug(loginController)
            $http.post('http://localhost:61059/api/authentication/authenticatedomainuser', loginController)
            //$http.post('http://api.devopsdashboard.com/api/authentication/authenticatedomainuser', loginController)
                .success(function (result) {
                    $log.debug('Result from POST');
                    $log.debug(result);
                    return result.isAuthenticated;
                });
        }

    }
})();