app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();

    $scope.appetizers = [{
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
    }, {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
    }, {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95
    }];
    $scope.extras = [{
        name: 'Cheese Garlic Bread',
        description: 'Garlic Bread with Cheese',
        price: 99
    }, {
        name: 'Garlic Bread',
        description: 'Garlic Bread',
        price: 89
    }, {
        name: 'Garlic Bread Stix',
        description: '',
        price: 85
    }];

}]);
