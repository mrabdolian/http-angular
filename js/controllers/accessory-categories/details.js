app.controller('AccessoryCatsDetails', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    var id = $stateParams.id;

    var url = 'http://karamobile.delecs.com:3000/api/AccessoryCategories/' + id;

    var getAccessoryCat = function () {
        $http({
            method: 'GET',
            url: url,
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.accessoryCat = response.data;
        }, function (response) {
            $scope.status = response.status + " " + response.statusText;
        });
    };

    getAccessoryCat();

}]);