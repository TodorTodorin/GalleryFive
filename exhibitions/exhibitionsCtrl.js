'use strict';

angular.module('myApp.exhibitions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/exhibitions', {
            templateUrl: 'exhibitions/exhibitions.html',
            controller: 'ExhibitionsCtrl'
        });
    }])

    .controller('ExhibitionsCtrl', function ($scope, $mdDialog) {

        $scope.showPictures = false;
        $scope.currentExhibition = {title: 'Кубизъм', info: 'Кубизмът е авангардно течение в изкуството, което се характеризира с пълно отрицание на класическата концепция за красотата. Не се спазват пропорциите, органичната цялост и завършеността на живите модели и материалните обекти. Вместо обектите да се разглеждат от един фиксиран ъгъл, те се раздробяват на множество фасети, така че могат да се видят няколко различни аспекта едновременно.',
            pictures: [
                {src: '/app/img/exhibitions/kubizm1.jpg'},
                {src: '/app/img/exhibitions/kubizm2.jpg'},
                {src: '/app/img/exhibitions/kubizm3.jpg'},
                {src: '/app/img/exhibitions/kubizm4.jpg'},
                {src: '/app/img/exhibitions/kubizm5.jpg'},
                {src: '/app/img/exhibitions/kubizm6.jpg'},
                {src: '/app/img/exhibitions/kubizm7.jpg'},
                {src: '/app/img/exhibitions/kubizm8.jpg'},
                {src: '/app/img/exhibitions/kubizm9.jpg'},
                {src: '/app/img/exhibitions/kubizm10.jpg'},
                {src: '/app/img/exhibitions/kubizm11.jpg'},
                {src: '/app/img/exhibitions/kubizm12.jpg'},
                {src: '/app/img/exhibitions/kubizm13.jpg'},
                {src: '/app/img/exhibitions/kubizm14.jpg'},
                {src: '/app/img/exhibitions/kubizm15.jpg'}

            ], thumbnail: '/app/img/exhibitions/thumb-exhibition2.jpg'};
        $scope.prevExhibition = {title: 'Барок', info: 'Барокът е стил в изкуството, доминирал в Европа почти два века: зародил се след Ренесанса в началото на 17-ти век в Рим, той е изместен от Класицизма в края на 18-ти век. Стилът се разпростира в голяма част от Европа, но твърде слабо в Холандия, където художници като Рембранд и Халс се придържат към вкуса на местните меценати, предпочитащи по-реалистичен стил и по-семпли архитектурни форми. Популярността и успехът на Барока са насърчавани от Римокатолическата църква, която решава на Трентския събор, в отговор на протестантската Реформация, че в изкуството трябва директно да бъдат третирани религиозни теми.',
            pictures: [
                {src: '/app/img/exhibitions/barok1.jpg'},
                {src: '/app/img/exhibitions/barok2.jpg'},
                {src: '/app/img/exhibitions/barok3.jpg'},
                {src: '/app/img/exhibitions/barok4.jpg'},
                {src: '/app/img/exhibitions/barok5.jpg'},
                {src: '/app/img/exhibitions/barok6.jpg'},
                {src: '/app/img/exhibitions/barok7.jpg'},
                {src: '/app/img/exhibitions/barok8.jpg'},
                {src: '/app/img/exhibitions/barok9.jpg'},
                {src: '/app/img/exhibitions/barok10.jpg'},
                {src: '/app/img/exhibitions/barok11.jpg'},
                {src: '/app/img/exhibitions/barok12.jpg'},
                {src: '/app/img/exhibitions/barok13.jpg'},
                {src: '/app/img/exhibitions/barok14.jpg'},
                {src: '/app/img/exhibitions/barok15.jpg'}

            ],
            thumbnail: '/app/img/exhibitions/thumb-exhibition1.jpg'};

        function pictureArray(options) {
            this.pictures = [];
        }

        pictureArray.prototype.clearArray = function () {
            this.pictures = [];
        };

        pictureArray.prototype.replaceArray = function (array) {
            this.pictures = array;
        };


        $scope.exhibitionPictures = new pictureArray();
        $scope.seeExhibition = function (exhibition) {
            $scope.showPictures = true;
            $scope.exhibitionPictures.replaceArray(exhibition.pictures);
//            $scope.selectedExhibition = exhibition;
        };
        $scope.clearSelectedExhibition = function () {
            $scope.showPictures = false;
            $scope.exhibitionPictures.clearArray();
        };
        $scope.openInDialog = function (picture, ev) {
            $mdDialog.show({
                controller: 'ExhibitionsPictureDialogCtrl',
                templateUrl: 'exhibitions/exhibitionPicture.html',
                targetEvent: ev,
                locals: {picture: picture}
            })
                .then(function (answer) {
//                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function () {
//                    $scope.alert = 'You cancelled the dialog.';
                });
        };
    });