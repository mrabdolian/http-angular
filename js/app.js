var app = angular.module('httpApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider

        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html'
        })

        .state('main.manufacturers', {
            url: '/manufacturers',
            templateUrl: 'views/manufacturers/list.html',
            controller: 'ManufacturersList'
        })

}]);

app.controller('MainCtrl', ['$scope', function ($scope) {


}]);