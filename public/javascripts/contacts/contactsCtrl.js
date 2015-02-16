'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', function($scope) {
        $scope.contacts = {address:'гр.София бул.Джеймс Баучер № 5',phoneNumber:'0987654321',fax:'+359 222 33 111',facebook:'https://www.facebook.com/art.gallery.x'};

});