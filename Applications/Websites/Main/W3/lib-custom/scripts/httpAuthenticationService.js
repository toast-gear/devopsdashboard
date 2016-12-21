(function () {
    angular
        .module('authenticationModule')
        .service('httpAuthenticationService', httpAuthenticationService);

    httpAuthenticationService.$inject = ['$rootScope', '$http', '$log'];

    function httpAuthenticationService($rootScope, $http, $log) {
        var httpAuthenticationService = {
            testService: testService,
            authenticateDomainUser: authenticateDomainUser
        };

        return httpAuthenticationService;

        function testService() {
            $log.debug('httpAuthenticationService - testService ran!');
        }

        function authenticateDomainUser() {
            return $http.post('http://api.devopsdashboard.com/api/authentication/authenticatedomainuser', $rootScope.credentialModel)
                .then(function (result) {
                    return result;
                });
        }
    }
})();