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

    $scope.delete = function (accessory) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + accessory.id + '" ?',
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
                url: 'http://karamobile.delecs.com:3000/api/Accessories/' + accessory.id
            }).then(function (response) {
                swal('Successfully Deleted!',
                    response.status + ' ' + response.statusText + '\nCount: ' + response.data.count, 'success');
                $scope.accessories.splice($scope.accessories.indexOf(accessory), 1);
            }, function (response) {
                swal('Failure!', response.status + ' ' + response.statusText, 'error');
            })
        });

    };

}]);