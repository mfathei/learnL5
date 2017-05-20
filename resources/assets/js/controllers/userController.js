/**
 * Created by mohamed on 5/19/2017.
 */



myApp.module('mainCtrl', []).
controller('userController', ['$scope', '$location', '$cookies', 'userService',
    function ($scope, $location, $cookies, userService) {

    $scope.required = true;

    $scope.login = {
            'username': 'mahdy@test.com',
            'password': 'secret'
        };

    $scope.doLogin= function () {

            var loginData = {
                'email': this.login.username,
                'password': this.login.password
            };

            userService.checkAuth(loginData)
                .then(function successCallback(response) {
                    console.log(response);
                    $cookies.put('auth', JSON.stringify(response));
                    $location.path('/dashboard');
                }, function errorCallback(response) {
                    console.log(response);
                    alert(response.data);
                });
        };

    $scope.doLogout = function () {
            userService.doUserLogout();
            $location.path('/');
        };

}]);
