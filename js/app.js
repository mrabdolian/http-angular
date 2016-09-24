var app = angular.module('httpApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider

        .state('main', {
            url: '/main',
            views: {
                'mainView': {
                    templateUrl: 'views/main.html'
                }
            }
        })

        .state('main.manufacturers', {
            url: '/manufacturers',
            views: {
                'mainView@': {
                    templateUrl: 'views/manufacturers/list.html',
                    controller: 'ManufacturersList'
                }
            }
        })

        .state('main.manufacturers.create', {
            url: '/create',
            views: {
                'mainView@': {
                    templateUrl: 'views/manufacturers/create.html',
                    controller: 'ManufacturersCreate'
                }
            }
        })

        .state('main.manufacturers.update', {
            url: '/update/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/manufacturers/update.html',
                    controller: 'ManufacturersUpdate'
                }
            }
        })

}]);

app.controller('MainCtrl', ['$scope', function ($scope) {


}]);