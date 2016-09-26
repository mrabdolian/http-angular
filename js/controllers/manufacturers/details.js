app.controller('ManufacturersDetails', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    
    var id = $stateParams.id;

    var url = 'http://karamobile.delecs.com:3000/api/Manufacturers/' + id;

    var getManufacturer = function () {
        $http({
            method: 'GET',
            url: url,
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.manufacturer = response.data;
        }, function (response) {
            $scope.status = response.status + " " + response.statusText;
        });
    };

    getManufacturer();

}]);