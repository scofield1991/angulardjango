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
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            login: login,
            logout: logout,
            register: register,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unauthenticated: unauthenticated

        };

        return Authentication;

        function register(email, password, username) {
            return $http.post('/api/v1/accounts', {
                username: username,
                password: password,
                email: email
            });
        }

        function login(email, password) {
            return $http.post('/api/v1/auth/login/', {
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);

            function loginSuccessFn(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);

                window.location = '/';
            }

            function loginErrorFn(data, status, headers, config) {
                console.error('Epic failure!');
            }
        }

        function logout() {
            return $http.post('/api/v1/auth/logout/')
                .then(logoutSuccessFn, logoutErrorFn);

            function logoutSuccessFn(data, status, headers, config) {
                Authentication.unauthenticated();

                window.location = '/';
            }

            function logoutErrorFn(data, status, headers, config) {
                console.error('Epoc failure!');
            }
        }

        function getAuthenticatedAccount() {
            if (!$cookies.AuthenticatedAccount) {
                return;
            }
            return JSON.parse($cookies.AuthenticatedAccount);
        }

        function isAuthenticated() {
            return !!$cookies.AuthenticatedAccount;
        }

        function setAuthenticatedAccount(account) {
            $cookies.AuthenticatedAccount = JSON.stringify(account);
        }

        function unauthenticated() {
            delete $cookies.authenticatedAccount;
        }
    }
})();