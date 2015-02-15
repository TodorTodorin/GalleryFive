'use strict';

angular.module('myApp.authors', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/authors', {
            templateUrl: 'authors/authors.html',
            controller: 'AuthorsCtrl'
        });
    }])

    .controller('AuthorsCtrl', function ($scope, $http) {
        $scope.authors = [
            {name: 'Мартин Стоянов', avatar: '/app/img/avatars/avatar1.jpg', info: 'Some info..'},
            {name: 'Леонардо Да Винчи', avatar: '/app/img/avatars/avatar2.jpg', info: 'Some info..'},
            {name: 'Ван Гог', avatar: '/app/img/avatars/avatar3.jpg', info: 'Some info..'},
            {name: 'Стефан Павлов', avatar: '/app/img/avatars/avatar4.jpg', info: 'Some info..'},
            {name: 'Йохан Борг', avatar: '/app/img/avatars/avatar5.jpg', info: 'Some info..'},
            {name: 'Йоханес Шрасен', avatar: '/app/img/avatars/avatar6.jpg', info: 'Some info..'},
            {name: 'Джон Харис', avatar: '/app/img/avatars/avatar7.jpg', info: 'Some info..'},
            {name: 'Елисавета Гуркова', avatar: '/app/img/avatars/avatar8.jpg', info: 'Some info..'},
            {name: 'Поасон Де Фиш', avatar: '/app/img/avatars/avatar9.jpg', info: 'Some info..'},
            {name: 'Карл Маркс', avatar: '/app/img/avatars/avatar10.jpg', info: 'Some info..'}
        ];
        $scope.downloadLatestAuthorPicture = function () {
            var req = {
                method: 'GET',
                url: 'http://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-99906.jpg',
                headers: {
                    'Content-Type': undefined
                }
            };
            $http(req)
                .success(function (data, status, headers, config) {
                    console.log('aaaa');
                    // this callback will be called asynchronously
                    // when the response is available
                })
                .error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });

        };
    });