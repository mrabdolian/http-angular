app.controller('ManufacturersUpdate', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.manufacturer = {};
    $scope.manufacturer.id = $stateParams.id;
    var url = 'http://karamobile.delecs.com:3000/api/Manufacturers/' + $scope.manufacturer.id;

    $http.get(url).then(function (response) {
        $scope.manufacturer.title = response.data.title;
    }, function (response) {
        // error while loading manufacturer data
    });

    $scope.update = function () {

        $http({
            method: 'PUT',
            url: url,
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                title: $scope.manufacturer.title
            }
        }).then(function (response) {
            swal('Successfully Updated!', 'Title: ' + response.data.title, 'success');
        }, function (response) {
            swal('Failure!', response.status + ' ' + response.statusText, 'error');
        })

    };

}]);