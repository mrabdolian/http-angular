app.controller('ManufacturersList', ['$scope', '$http', function ($scope, $http) {

    var getManufacturers = function () {
        $http({
            method: 'GET',
            url: 'http://karamobile.delecs.com:3000/api/Manufacturers',
            headers: {
                Accept: 'application/json'
            }
        }).then(function (response) {
            $scope.status = response.status + " " + response.statusText;
            $scope.manufacturers = response.data;
        });
    };

    getManufacturers();

    $scope.delete = function (id) {
        var confirm = window.confirm('Are you sure to DELETE ' + id + '?');
        if(confirm) {
            $http({
                method: 'DELETE',
                url: 'http://karamobile.delecs.com:3000/api/Manufacturers/' + id
            }).then(function (response) {
                alert('Successfully Deleted! (' + response.status + ')\nCount: ' + response.data.count);
                getManufacturers(); // get data again after successful delete
            }, function (response) {
                alert('Failure! (' + response.status + response.statusText + ')');
            })
        }

    };

}]);