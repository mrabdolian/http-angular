app.controller('ManufacturersList', ['$scope', '$state', function ($scope, $state) {

    // Get Data from the server
    $scope.manufacturers = $scope.Resource.query({entity: 'Manufacturers'}, function () {
    }, function (response) {
        swal({
            title: 'Failed to load Manufacturers',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main');
        });
    });

    $scope.delete = function (manufacturer) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + manufacturer.id + '" ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d9534f',
            cancelButtonText: 'No',
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {

            // Delete a Manufacturer from the server
            $scope.Resource.delete({entity: 'Manufacturers', id: manufacturer.id}, function (response) {
                swal('Successfully Deleted!', 'ID: "' + manufacturer.id + '"\nCount: ' + response.count, 'success');
                $scope.manufacturers.splice($scope.manufacturers.indexOf(manufacturer), 1);
            }, function (response) {
                swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
            });

        });

    };

}]);