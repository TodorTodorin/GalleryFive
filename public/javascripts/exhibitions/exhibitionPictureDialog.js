/**
 * Created by Todor Todorin on 1/19/2015.
 */
angular.module('myApp')
    .controller('ExhibitionsPictureDialogCtrl', function ($scope, $mdDialog, picture) {
        $scope.picture = picture;
        $scope.hide = function () {
            $mdDialog.hide();
        };
        $scope.cancel = function () {
            $mdDialog.cancel();
        };
        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    });