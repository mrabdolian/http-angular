app.controller('AccessoryCatsCreate', ['$scope', '$http', function ($scope, $http) {

    $scope.create = function () {
        $http({
            method: 'POST',
            url: 'http://karamobile.delecs.com:3000/api/AccessoryCategories',
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