/**
 * Created by user on 31.08.15.
 */

(function() {
    'use strict';

    angular
        .module('authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login = login;

        console.log(Authentication.isAuthenticated());
        //activate();
        //
        //function activate() {
        //    if(Authentication.isAuthenticated()) {
        //        $location.url('/');
        //    }
        //}

        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }

})();