/**
 * Created by user on 31.08.15.
 */

(function () {
    'use strict';

    angular
        .module('layout.controllers')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];

    function NavbarController($scope, Authentication) {
        var vm = this;

        vm.logout = logout;

        function logout() {
            Authentication.logout();
        }
    }
})();