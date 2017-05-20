/**
 * Created by mohamed on 5/20/2017.
 */


angular.module('userModule', [])
    .factory('userService', ['$http', function ($http) {

            return {
                checkAuth: function (loginData) {
                    // console.log(loginData);
                    return $http({
                        headers: {'Content-Type': 'application/json'},
                        url: baseUrl + 'api/auth',
                        method: 'POST',
                        data: loginData
                    });
                }

            };
        }

        ]
    );
