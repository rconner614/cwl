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
        templateUrl: '/app/views/_home.html',
        controller: 'homeCtrl'
    }).state('login', {
        url: '/login',
        templateUrl: '/app/views/_login.html',
        controller: 'loginCtrl'
    }).state('documents', {
        url: '/documents',
        templateUrl: '/app/views/_documents.html',
        controller: 'documentsCtrl'
    });
    $locationProvider.html5Mode(true);
}