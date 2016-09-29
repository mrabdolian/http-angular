app.controller('AccessoriesUpdate', ['$scope', '$state','$stateParams', function ($scope, $state, $stateParams) {

    // Get manufacturers array to list their IDs for selecting in form (handle relation)
    $scope.manufacturers = $scope.Resource.query({entity: 'Manufacturers'}, function () {
    }, function (response) {
        swal('Failed to load Manufacturers List', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
    });

    var id = $stateParams.id;
    $scope.accessory = {id: id};

    $scope.accessory = $scope.Resource.get({entity: 'Accessories', id: id}, function () {
    }, function (response) {
        swal({
            title: 'Failed to load Accessory',
            text: response.status + ' ' + response.statusText + '\nError:' + response.data.error.message,
            type: 'error'
        }, function (isConfirmed) {
            $state.go('main.accessories');
        });
    });

    $scope.update = function () {

        $scope.Resource.update({entity: 'Accessories', id: id}, $scope.accessory, function (response) {
            swal('Successfully Updated!', 'ID: ' + response.id, 'success');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);