app.controller('AccessoryCatsCreate', ['$scope', function ($scope) {

    $scope.create = function () {

        $scope.Resource.save({entity: 'AccessoryCategories'}, $scope.accessoryCat, function (response) {
            swal('Successfully Created!', 'ID: ' + response.id, 'success');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    };

}]);