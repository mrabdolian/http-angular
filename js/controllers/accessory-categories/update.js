app.controller('AccessoryCatsUpdate', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var id = $stateParams.id;
    $scope.accessoryCat = {id: id};

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

    $scope.update = function () {

        $scope.Resource.update({entity: 'AccessoryCategories', id: id}, $scope.accessoryCat, function (response) {
            swal('Successfully Updated!', 'ID: ' + response.id, 'success');
            $state.go('main.accessoryCats');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);