/**
 * Created by mohamed on 5/19/2017.
 */

angular.module('mainCtrl', []).controller('userController', ['$scope', '$location', 'userService', function ($scope, $location, userService) {

    $scope.required = true;

    angular.extend($scope, {

        doLogin: function () {

            var loginData = {
                'email': $scope.login.username,
                'password': $scope.login.password
            };

            userService.checkAuth(loginData)
                .then(function successCallback(response) {
                    console.log(response);
                    $location.path('/dashboard');
                }, function errorCallback(response) {
                    console.log(response);
                    alert(response.data);
                });
        }

    });

}]);
