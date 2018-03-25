(function (app) {
    'use strict';

    app.controller('LoginCtrl', ['$scope', '$state', 'LoginService', LoginCtrl]);

    function LoginCtrl($scope, $state, LoginService) {

        $scope.user = [];
        $scope.userName = "";
        $scope.password = "";
        $scope.userDisplayName = "";
        $scope.isAuthenticated = true;

        $scope.logout = function () {

        };

        $scope.loggedIn = function () {

            $scope.user = {
                grant_type: 'password',
                username: $scope.userName,
                password: $scope.password
            };

            if ($scope.userName == "" || $scope.password == "") {
                $scope.isAuthenticated = false;
                $state.go("login");
            }
            else {
                var promise = LoginService.login($scope.user);

                promise.then(function (resp) {
                    if (resp.data != null) {
                        if (resp.data.error == "invalid_grant") {
                            $scope.isAuthenticated = false;
                            $state.go('login');
                        }
                        else {

                            $scope.isAuthenticated = true;
                            sessionStorage.setItem('userName', $scope.userName);
                            sessionStorage.setItem('accessToken', resp.data.access_token);
                            sessionStorage.setItem('userName', $scope.userName);
                            $state.go('home');
                        }
                    } else {
                        $scope.isAuthenticated = false;
                        $state.go("login");
                    }
                }, function () {

                    $scope.isAuthenticated = false;
                    $state.go("login");

                }, function () {
                    console.log("C");
                    $scope.isAuthenticated = false;
                    $state.go("login");

                });

            }
        };


    };
})(angular.module("kenApp"));