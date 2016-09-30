app.controller('ManufacturersCreate', ['$scope', '$state', function ($scope, $state) {

    $scope.create = function () {

        $scope.Resource.save({entity: 'Manufacturers'}, $scope.manufacturer, function (response) {
            swal('Successfully Created!', 'ID: ' + response.id, 'success');
            $state.go('main.manufacturers');
        }, function (response) {
            swal('Failed!', response.status + ' ' + response.statusText + '\nError:' + response.data.error.message, 'error');
        });

    }

}]);