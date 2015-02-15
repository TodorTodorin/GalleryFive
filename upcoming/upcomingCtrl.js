'use strict';

angular.module('myApp.upcoming', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/upcoming', {
            templateUrl: 'upcoming/upcoming.html',
            controller: 'UpcomingCtrl'
        });
    }])

    .controller('UpcomingCtrl', function ($scope) {
        $scope.events = [
            {shortInfo: 'Изложба на Х.Х', type: 1, date: new Date('02.02.2015 18:00'), info: 'Информация'},
            {shortInfo: 'Изложба на П.П', type: 2, date: new Date('02.03.2015 14:20'), info: 'Информация'},
            {type: 1, shortInfo: 'Скулптори от И.И.', date: new Date('02.03.2015 9:00'), info: 'Информация'}
        ];
        $scope.showHideInfo = function (event) {
            event.showInfo = !event.showInfo;
        }

    });