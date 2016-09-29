app.controller('ManufacturersCreate', ['$scope', function ($scope) {

    $scope.create = function () {

        $scope.Resource.save({entity: 'Manufacturers'}, $scope.manufacturer, function (response) {
            swal('Successfully Created!', 'ID: ' + response.id, 'success');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    }

}]);