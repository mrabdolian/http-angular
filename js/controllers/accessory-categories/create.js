app.controller('AccessoryCatsCreate', ['$scope', '$state', function ($scope, $state) {

    $scope.create = function () {

        $scope.Resource.save({entity: 'AccessoryCategories'}, $scope.accessoryCat, function (response) {
            swal('Successfully Created!', 'ID: ' + response.id, 'success');
            $state.go('main.accessoryCats');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);