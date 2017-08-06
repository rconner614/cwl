(function(){
    'use strict';
    angular.module('cwl.core')
        .controller('loginCtrl', loginCtrl);
    loginCtrl.$inject = ['$scope', 'authSrv'];
    function loginCtrl($scope, authSrv){
        $scope.user = {
            isAuthenticated: function(){
                return false;
            }
        };
        $scope.filterDocs = {};
        if($scope.user.isAuthenticated()){
            //protect fetching documents unless authenticated
            $scope.documents = [
                {
                    name: 'June Minutes',
                    type: 'minutes'
                },
                {
                    name: 'July Minutes',
                    type: 'minutes'
                },
                {
                    name: 'Candlewood Lake Property Handbook 2017',
                    type: 'handbook'
                },
                {
                    name: 'Parade Permit',
                    type: 'misc'
                }
            ];
        }

        $scope.login = function(){
            authSrv.login($scope.user);
        };
    }
}());