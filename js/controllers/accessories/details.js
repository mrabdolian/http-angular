app.controller('AccessoriesDetails', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var id = $stateParams.id;

    // Get Data from the server
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

}]);