/**
 * Created by mohamed on 5/19/2017.
 */


'use strict';

var prevUrl = '/dashboard';

var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'mainCtrl', 'userModule']);

// change angular {{}} to {[{ }]}
myApp.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/users/login.html',
        controller: 'userController',
        authenticated: false
    });

    $routeProvider.when('/dashboard', {
        templateUrl: 'templates/users/dashboard.html',
        controller: 'userController',
        authenticated: true
    });

    $routeProvider.when('/logout', {
        templateUrl: 'templates/users/logout.html',
        controller: 'userController',
        authenticated: true
    });

    $routeProvider.otherwise('/');

    // remove hash from urls
    // $locationProvider.html5Mode(true);

    // remove ! from hash
    $locationProvider.hashPrefix('');
}

]);

myApp.run(['$rootScope', '$location', 'userService', function ($rootScope, $location, userService) {

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        $rootScope.previousState = current.$$route;
        $rootScope.currentState = next.$$route;
        console.log($rootScope.previousState);
        console.log($rootScope.currentState);

        if (next.authenticated) {
            if (!userService.getAuthStatus()) {
                $location.path('/');
            }
        }

        if (next.$$route.originalPath === '/') {
            // console.log('/ detected');
            // console.log(current);
            if (userService.getAuthStatus()) {
                $location.path(current.$$route.originalPath);
            }
        }
    });

}]);
