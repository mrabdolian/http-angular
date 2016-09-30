app.controller('AccessoriesCreate', ['$scope', '$state', function ($scope, $state) {

    // Get manufacturers array to list their IDs for selecting in form (handle relation)
    $scope.manufacturers = $scope.Resource.query({entity: 'Manufacturers'}, function () {
    }, function (response) {
        swal('Failed to load Manufacturers List', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
    });

    // TODO: fill accessory.images array before sending request

    $scope.create = function () {

        $scope.Resource.save({entity: 'Accessories'}, $scope.accessory, function (response) {
            swal('Successfully Created!', 'ID: ' + response.id, 'success');
            $state.go('main.accessories');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);