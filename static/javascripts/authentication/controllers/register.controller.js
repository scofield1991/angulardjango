/**
 * Created by oleksandr on 30.08.15.
 */
(function () {
    'use strict';

    angular
        .module('authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    function RegisterController($location, $scope, Authentication) {
        var vm = this;

        vm.register = register;

        console.log(Authentication.isAuthenticated());
        //activate();
        //
        //function activate() {
        //    if(Authentication.isAuthenticated()) {
        //        $location.url('/');
        //    }
        //}

        function register() {
            Authentication.register(vm.email, vm.password, vm.username);
        }
    }
})();