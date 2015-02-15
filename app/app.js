'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.contacts',
    'myApp.authors',
    'myApp.exhibitions',
    'myApp.upcoming',
    'myApp.version',
    'wu.masonry',
    'ngAnimate',
    'ngMaterial'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
