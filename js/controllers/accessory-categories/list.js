app.controller('AccessoryCatsList', ['$scope', '$state', function ($scope, $state) {

    // Get Data from the server
    $scope.accessoryCategories = $scope.Resource.query({entity: 'AccessoryCategories'},function () {
    }, function (response) {
        swal({
            title: 'Failed to load Accessory Categories',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main');
        });
    });

    $scope.delete = function (accessoryCat) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + accessoryCat.id + '" ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d9534f',
            cancelButtonText: 'No',
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {

            // Delete a Manufacturer from the server
            $scope.Resource.delete({entity: 'AccessoryCategories', id: accessoryCat.id}, function (response) {
                swal('Successfully Deleted!', 'ID: "' + accessoryCat.id + '"\nCount: ' + response.count, 'success');
                $scope.accessoryCategories.splice($scope.accessoryCategories.indexOf(accessoryCat), 1);
            }, function (response) {
                swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
            });

        });

    };

}]);