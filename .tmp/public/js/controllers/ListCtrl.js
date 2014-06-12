define(function () {
    return ['$scope', function($scope) {
        $scope.addItem = function () {
            console.log('addItem');
        };
        $scope.removeItems = function () {
            console.log('removeItems');
        };
        $scope.items = [{
            description: 'Do a thing',
            completed: true
        }, {
            description: 'Do another thing',
            completed: false
        }, {
            description: 'Do a third thing',
            completed: false
        }];
    }];
});