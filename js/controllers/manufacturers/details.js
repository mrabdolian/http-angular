app.controller('ManufacturersDetails', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    
    var id = $stateParams.id;

    // Get Data from the server
    $scope.manufacturer = $scope.Resource.get({entity: 'Manufacturers', id: id}, function () {
    }, function (response) {
        swal({
            title: 'Failed to load Manufacturer',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main.manufacturers');
        });
    });

}]);