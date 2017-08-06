(function(){
    'use strict';
    angular.module('cwl.core')
        .controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', 'authSrv'];
    function loginCtrl($scope, authSrv){
        $scope.user = {};
        $scope.login = function(){
            authSrv.login($scope.user);
        };
    }
}());