(function (app) {

    'use strict';
    app.factory("LoginService", ["$http", "appSetting", LoginService]);

    function LoginService($http, appSetting) {

        this.login = function (userData) {

            var response = $http({
                url: appSetting.apiBaseUrl + 'token',
                method: 'POST',
                data: $.param({
                    grant_type: userData.grant_type,
                    username: userData.username,
                    password: userData.password
                }),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            return response;
        };

        return {
            login: this.login
        }
    };

})(angular.module("kenApp"));  