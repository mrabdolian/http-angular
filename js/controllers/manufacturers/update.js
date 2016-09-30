app.controller('ManufacturersUpdate', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var id = $stateParams.id;
    $scope.manufacturer = {id: id};

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

    $scope.update = function () {

        $scope.Resource.update({entity: 'Manufacturers', id: id}, $scope.manufacturer, function (response) {
            swal('Successfully Updated!', 'ID: ' + response.id, 'success');
            $state.go('main.manufacturers');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);