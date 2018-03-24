(function (app) {

    'use strict';

    app.factory("EmployeeService", ["$http", "appSetting", "$q", EmployeeService]);

    function EmployeeService($http, appSetting, $q) {

        this.GetEmployees = function () {
            var deffered = $q.defer();

            var query = $http.get(appSetting.apiBaseUrl + "api/employee/getemployees");

            return query.then(function (response) {
                deffered.resolve(response.data);
                return deffered.promise;
            }, function (response) {
                deffered.reject(response);
                return deffered.promise;
            });
        };

        return {
            GetEmployees: this.GetEmployees
        }
    };

})(angular.module("kenApp"));  