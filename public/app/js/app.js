var app = angular.module('cwl.core', ['ui.router']);

app.run(["$rootScope", function($rootScope){
    $rootScope.today = new Date();
}]);

app.config(config);
config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/app/views/_login.html',
        controller: 'loginCtrl'
    });
    $locationProvider.html5Mode(true);
}