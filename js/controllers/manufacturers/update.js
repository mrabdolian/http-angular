app.controller('ManufacturersUpdate', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.id = $stateParams.id;
    var url = 'http://karamobile.delecs.com:3000/api/Manufacturers/' + $scope.id;

    $http.get(url).then(function (response) {
        $scope.title = response.data.title;
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
                title: $scope.title
            }
        }).then(function (response) {
            alert('Successfully Updated! (' + response.status + ')\n' +
                'Title: ' + response.data.title + ' - ID: ' + response.data.id);
        }, function (response) {
            alert('Failure! (' + response.status + response.statusText + ')');
        })

    };

}]);