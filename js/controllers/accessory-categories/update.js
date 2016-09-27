app.controller('AccessoryCatsUpdate', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.id = $stateParams.id;
    var url = 'http://karamobile.delecs.com:3000/api/AccessoryCategories/' + $scope.id;

    $http.get(url).then(function (response) {
        $scope.accessoryCat = response.data;
    });

    $scope.update = function () {

        $http({
            method: 'PUT',
            url: url,
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                title: $scope.accessoryCat.title
            }
        }).then(function (response) {
            swal('Successfully Updated!', 'Title: ' + response.data.title, 'success');
        }, function (response) {
            swal('Failure!', response.status + ' ' + response.statusText, 'error');
        })

    };

}]);