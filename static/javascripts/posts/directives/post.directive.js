/**
 * Created by user on 01.09.15.
 */

(function() {
    'use strict';

    angular
        .module('posts.directives')
        .directive('post', post);

    function post() {

        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };
        return directive;
    }
})();