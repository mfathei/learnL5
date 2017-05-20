/**
 * Created by mohamed on 5/19/2017.
 */


'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'mainCtrl', 'userModule']);

// change angular {{}} to {[{ }]}
myApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/users/login.html',
        controller: 'userController'
    });

    $routeProvider.when('/dashboard', {
        templateUrl: 'templates/users/dashboard.html',
        controller: 'userController'
    });

    $routeProvider.when('/logout', {
        templateUrl: 'templates/users/logout.html',
        controller: 'userController'
    });

    $routeProvider.otherwise('/');

    // remove hash from urls
    $locationProvider.html5Mode(true);
}

]);
