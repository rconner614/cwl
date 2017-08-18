(function(){
    'use strict';
    angular.module('cwl.core')
        .controller('navCtrl', navCtrl);
    navCtrl.$inject = ['$scope', 'authSrv', '$uibModal', '$aside'];
    function navCtrl($scope, authSrv, $uibModal, $aside){
        $scope.login = function(x){
            $uibModal.open({
                backdrop: true,
                templateUrl: '/app/views/loginModal.html',
                controller: 'loginCtrl',
                animation: true,
                size: 'md',
                resolve: {
                    tab: [function(){
                        return x;
                    }]
                }
            });
        };
        $scope.openAside = function() {
            var modalInstance = $aside.open({
                templateUrl: '/app/views/menuAside.html',
                placement: 'right',
                size: 'sm',
                backdrop: true,
                controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance){
                    $scope.close = function(){
                        $uibModalInstance.dismiss();
                    };
                    $scope.go = function(x){
                        $uibModalInstance.close(x);
                    };
                }]
            });
            modalInstance.result.then(function(data){
                $scope.login(data);
            });
        }
    }
}());