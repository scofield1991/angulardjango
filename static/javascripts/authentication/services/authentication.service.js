/**
 * Created by oleksandr on 30.08.15.
 */
(function () {
    'use strict';

    angular
        .module('authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];

    function Authentication($cookies, $http) {

        var Authentication = {
            register: register
        };

        return Authentication;

        function register(email, password, username){
            return $http.post('/api/v1/accounts', {
                username: username,
                password: password,
                email: email
            });
        }
    }
})();