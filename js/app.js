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

        .state('main.manufacturers.details', {
            url: '/details/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/manufacturers/details.html',
                    controller: 'ManufacturersDetails'
                }
            }
        })

        .state('main.accessoryCats', {
            url: '/accessoryCats',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessory-categories/list.html',
                    controller: 'AccessoryCatsList'
                }
            }
        })

        .state('main.accessoryCats.create', {
            url: '/create',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessory-categories/create.html',
                    controller: 'AccessoryCatsCreate'
                }
            }
        })

        .state('main.accessoryCats.update', {
            url: '/update/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessory-categories/update.html',
                    controller: 'AccessoryCatsUpdate'
                }
            }
        })

        .state('main.accessoryCats.details', {
            url: '/details/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessory-categories/details.html',
                    controller: 'AccessoryCatsDetails'
                }
            }
        })

        .state('main.accessories', {
            url: '/accessories',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessories/list.html',
                    controller: 'AccessoriesList'
                }
            }
        })

        .state('main.accessories.create', {
            url: '/create',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessories/create.html',
                    controller: 'AccessoriesCreate'
                }
            }
        })

        .state('main.accessories.update', {
            url: '/update/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessories/update.html',
                    controller: 'AccessoriesUpdate'
                }
            }
        })

        .state('main.accessories.details', {
            url: '/details/:id',
            views: {
                'mainView@': {
                    templateUrl: 'views/accessories/details.html',
                    controller: 'AccessoriesDetails'
                }
            }
        })

}]);

app.controller('MainCtrl', ['$scope', function ($scope) {


}]);