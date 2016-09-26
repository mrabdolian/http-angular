app.controller('AccessoriesDetails', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    var id = $stateParams.id;

    var url = 'http://karamobile.delecs.com:3000/api/Accessories/' + id;

    var getAccessory = function () {
        $http({
            method: 'GET',
            url: url,
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.accessory = response.data;
        }, function (response) {
            $scope.status = response.status + " " + response.statusText;
        });
    };

    getAccessory();

}]);