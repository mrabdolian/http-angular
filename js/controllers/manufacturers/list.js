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
        }, function (response) {
            $scope.status = response.status + " " + response.statusText;
        });
    };

    getManufacturers();

    $scope.delete = function (manufacturer) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + manufacturer.id + '" ?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#d9534f',
            cancelButtonText: 'No',
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, function () {
            $http({
                method: 'DELETE',
                url: 'http://karamobile.delecs.com:3000/api/Manufacturers/' + manufacturer.id
            }).then(function (response) {
                swal('Successfully Deleted!',
                    response.status + ' ' + response.statusText + '\nCount: ' + response.data.count, 'success');
                $scope.manufacturers.splice($scope.manufacturers.indexOf(manufacturer), 1);
            }, function (response) {
                swal('Failure!', response.status + ' ' + response.statusText, 'error');
            })
        });

    };

}]);