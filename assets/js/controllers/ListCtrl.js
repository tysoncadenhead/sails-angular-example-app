define(function () {
    return ['$scope', '$http', function($scope, $http) {

        $scope.description = '';
        
        $scope.itemCheck = function (data) {
            $http.get('/list/update?id=' + data.id + '&completed=' + ((data.completed) ? 0: 1));
        };

        $scope.addItem = function () {
            $http.get('/list/create?description=' + $scope.description).success(function(data) {
              $scope.items.push(data);
            });
        };

        $scope.removeItem = function (data) {
            $http['delete']('/list/' + data.id).success(function() {
              $scope.items.splice(data.index, 1);
            });
        };

        $http.get('/list/find').success(function(data) {
          for (var i = 0; i < data.length; i++) {
            data[i].index = i;
          }
          $scope.items = data;
        });
    }];
});