app.controller('AccessoriesUpdate', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    var getManufacturers = function () {
        $http.get('http://karamobile.delecs.com:3000/api/Manufacturers').then(function (response) {
            $scope.manufacturers = response.data;
        }, function (response) {
            // error while loading manufacturers ids
        });
    };

    getManufacturers();

    var id = $stateParams.id;
    var url = 'http://karamobile.delecs.com:3000/api/Accessories/' + id;


    $http.get(url).then(function (response) {
        $scope.accessory = response.data;
    });

    $scope.update = function () {
        $http({
            method: 'PUT',
            url: url,
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                // images: [
                //     "url1"
                // ],
                title: $scope.accessory.title,
                manufacturerId: $scope.accessory.manufacturerId
            }
        }).then(function (response) {
            swal('Successfully Updated!',
                'Title: ' + response.data.title + '\nManufacturerID: ' + response.data.manufacturerId, 'success');
        }, function (response) {
            swal('Failure!', response.status + ' ' + response.statusText, 'error');
        })
    };

}]);