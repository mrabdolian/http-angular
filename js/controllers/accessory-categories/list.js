app.controller('AccessoryCatsList', ['$scope', '$http', function ($scope, $http) {

    var getAccessoryCats = function () {
        $http({
            method: 'GET',
            url: 'http://karamobile.delecs.com:3000/api/AccessoryCategories',
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.accessoryCategories = response.data;
        });
    };

    getAccessoryCats();

    $scope.delete = function (id) {
        var confirm = window.confirm('Are you sure to DELETE ' + id + '?');
        if(confirm) {
            $http({
                method: 'DELETE',
                url: 'http://karamobile.delecs.com:3000/api/AccessoryCategories/' + id
            }).then(function (response) {
                alert('Successfully Deleted! (' + response.status + ')\nCount: ' + response.data.count);
                getAccessoryCats(); // get data again after successful delete
            }, function (response) {
                alert('Failure! (' + response.status + response.statusText + ')');
            })
        }

    };

}]);