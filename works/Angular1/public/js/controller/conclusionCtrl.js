app.controller('formConclusionCtrl', function ($scope, $location) {
  $scope.approach =  sessionStorage.getItem('approach');
  $scope.appType = sessionStorage.getItem('appType');
});