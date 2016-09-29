app.controller('AccessoryCatsDetails', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var id = $stateParams.id;

    // Get Data from the server
    $scope.accessoryCat = $scope.Resource.get({entity: 'AccessoryCategories', id: id}, function () {
    }, function (response) {
        swal({
            title: 'Failed to load Accessory Category',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main.accessoryCats');
        });
    });

}]);