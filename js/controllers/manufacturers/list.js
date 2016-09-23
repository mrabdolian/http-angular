app.controller('ManufacturersList', ['$scope', '$http', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'http://karamobile.delecs.com:3000/api/Manufacturers',
        headers: {
            Accept: 'application/json'
        }
    }).then(function (response) {
        $scope.status = response.status + " " + response.statusText;
        $scope.manufacturers = response.data;
    })

}]);