app.controller('AccessoriesList', ['$scope', '$http', function ($scope, $http) {

    var getAccessories = function () {
        $http({
            method: 'GET',
            url: 'http://karamobile.delecs.com:3000/api/Accessories',
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.accessories = response.data;
        });
    };

    getAccessories();

    $scope.delete = function (id) {
        var confirm = window.confirm('Are you sure to DELETE ' + id + '?');
        if(confirm) {
            $http({
                method: 'DELETE',
                url: 'http://karamobile.delecs.com:3000/api/Accessories/' + id
            }).then(function (response) {
                alert('Successfully Deleted! (' + response.status + ')\nCount: ' + response.data.count);
                getAccessories(); // get data again after successful delete
            }, function (response) {
                alert('Failure! (' + response.status + response.statusText + ')');
            })
        }

    };

}]);