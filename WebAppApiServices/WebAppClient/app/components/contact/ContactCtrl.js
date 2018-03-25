(function (app) {
    'use strict';

    app.controller('ContactCtrl', ['$scope', ContactCtrl]);

    function ContactCtrl($scope) {

        $scope.PageTitle = '';
        $scope.PageContent = '';

        $scope.init = function () {
            $scope.PageTitle = 'Contact Page';
            $scope.PageContent = 'Contact Page Content';
        };

        $scope.init();
    };
})(angular.module("kenApp"));