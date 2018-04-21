(function (app) {
    "use strict";

    // factory EmployeeService
    // inject appSetting, $http, $q objects
    app.factory("EmployeeService", [
        "appSetting",
        "$http",
        "$q",
        EmployeeService
    ]);

    // Get all employees api
    function EmployeeService(appSetting, $http, $q) {

        this.GetEmployees = function () {
            debugger;
            var deffered = $q.defer();

            var query = $http.get(
                appSetting.apiBaseUrl + "api/employee/getemployees"
            );

            var result;

            return query.then(
                function (response) {   // promise by deffered
                    debugger;
                    deffered.resolve(response.data);
                    result = deffered.promise;
                    return result;
                },
                function (response) {   // reject by deffered (error)
                    debugger;
                    deffered.reject(response);
                    result = deffered.promise;
                    return result;
                }
            );
        };

        // result object
        return {
            GetEmployees: this.GetEmployees
        };
    }
})(angular.module("kenApp"));
