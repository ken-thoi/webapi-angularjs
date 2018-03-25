(function (app) {
    'use strict';

    app.controller('AboutCtrl', ['$scope', AboutCtrl]);

    function AboutCtrl($scope) {

        $scope.PageTitle = '';
        $scope.PageContent = '';

        $scope.init = function () {
            $scope.PageTitle = 'About Page';
            $scope.PageContent = 'About Page Content';
        };

        $scope.init();
    };
})(angular.module("kenApp"));