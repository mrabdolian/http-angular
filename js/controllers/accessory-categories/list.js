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

    $scope.delete = function (accessoryCat) {

        swal({
            title: 'Are you sure?',
            text: 'Are you sure you want to Delete item with ID: "' + accessoryCat.id + '" ?',
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
                url: 'http://karamobile.delecs.com:3000/api/AccessoryCategories/' + accessoryCat.id
            }).then(function (response) {
                swal('Successfully Deleted!',
                    response.status + ' ' + response.statusText + '\nCount: ' + response.data.count, 'success');
                $scope.accessoryCategories.splice($scope.accessoryCategories.indexOf(accessoryCat), 1);
            }, function (response) {
                swal('Failure!', response.status + ' ' + response.statusText, 'error');
            })
        });

    };

}]);