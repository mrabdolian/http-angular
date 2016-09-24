app.controller('ManufacturersCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.create = function () {
        console.log('SUBMIT TRRIGERRED');
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
            alert('Successful (' + response.status + ')');
        }, function (response) {
            alert('Failure (' + response.status + ' - ' + response.statusText + ')');
        })
    }

}]);