app.controller('ManufacturersCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.create = function () {
        $http({
            method: 'POST',
            url: 'http://karamobile.delecs.com:3000/api/Manufacturers',
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                title: $scope.title,
                id: $scope.id
            }
        }).then(function (response) {
            swal('Successful!', response.status + ' ' + response.statusText, 'success');
        }, function (response) {
            swal('Failure!', response.status + ' ' + response.statusText, 'error');
        })
    }

}]);