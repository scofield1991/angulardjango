/**
 * Created by user on 01.09.15.
 */
(function() {
    'use strict';

    angular
        .module('posts', [
            'posts.controllers',
            'posts.directives',
            'posts.services'
        ]);

    angular
        .module('posts.controllers',[]);

    angular
        .module('posts.directives', ['ngDialog']);

    angular
        .module('posts.services', []);
})();