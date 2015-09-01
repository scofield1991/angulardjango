/**
 * Created by user on 01.09.15.
 */

(function() {
    'use strict';

    angular
        .module('posts.directives')
        .directive('posts', posts);

    function posts() {
        var directive = {
            controller: 'PostsController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/templates/posts/posts.html'
        };

        return directive;
    }
})();