/**
 * Created by mohamed on 5/19/2017.
 */

angular.module('mainCtrl', []).controller('userController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    $scope.required = true;

    angular.extend($scope, {

        doLogin: function (loginFom) {
            $http({
                headers: {'Content-Type': 'application/json'},
                url: baseUrl + 'api/auth',
                method: 'POST',
                data: {
                    'email': $scope.login.username,
                    'password': $scope.login.password
                }
            }).then(function successCallback(response) {
                console.log(response);
                $location.path('/dashboard');
            }, function errorCallback(response) {
                console.log(response);
                alert(response.data);
            });
        }

    });

}]);
