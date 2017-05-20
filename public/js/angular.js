/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by mohamed on 5/19/2017.
 */



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
}]);

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

/***/ })

/******/ });