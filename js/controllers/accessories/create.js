app.controller('AccessoriesCreate', ['$scope', '$http', function ($scope, $http) {

    var getManufacturers = function () {
        $http.get('http://karamobile.delecs.com:3000/api/Manufacturers').then(function (response) {
            $scope.manufacturers = response.data;
        }, function (response) {
            // error while loading manufacturers ids
        });
    };

    getManufacturers();

    $scope.create = function () {
        $http({
            method: 'POST',
            url: 'http://karamobile.delecs.com:3000/api/Accessories',
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                // images: [
                //     "url1"
                // ],
                title: $scope.accessory.title,
                id: $scope.accessory.id,
                manufacturerId: $scope.accessory.manufacturerId
            }
        }).then(function (response) {
            alert('Successful (' + response.status + ')');
        }, function (response) {
            alert('Failure (' + response.status + ' - ' + response.statusText + ')');
        })
    }

}]);