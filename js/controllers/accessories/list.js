app.controller('AccessoriesList', ['$scope', function ($scope) {

    // Get Data from the server
    $scope.accessories = $scope.Resource.query({entity: 'Accessories'},function () {
    }, function (response) {
        swal({
            title: 'Failed to load Accessories',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main');
        });
    });

    $scope.delete = function (accessory) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + accessory.id + '" ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d9534f',
            cancelButtonText: 'No',
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {

            // Delete a Manufacturer from the server
            $scope.Resource.delete({entity: 'Accessories', id: accessory.id}, function (response) {
                swal('Successfully Deleted!', 'ID: "' + accessory.id + '"\nCount: ' + response.count, 'success');
                $scope.accessories.splice($scope.accessories.indexOf(accessory), 1);
            }, function (response) {
                swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
            });

        });

    };

}]);