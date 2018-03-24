(function (app) {
    'use strict';

    app.controller('HomeCtrl', ['$scope', 'EmployeeService', HomeCtrl]);

    function HomeCtrl($scope, EmployeeService) {

        $scope.getAllEmployees = function () {
            EmployeeService.GetEmployees()
                .then(function (result) {
                    $scope.employees = result;
                }, function (error) {
                    console.log("Bad Request Process");
                });
        };

        $scope.init = function () {
            $scope.getAllEmployees();
        };

        $scope.init();
    };
})(angular.module("kenApp")); 