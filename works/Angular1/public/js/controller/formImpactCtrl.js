app.controller('formController', function ($scope, $location, $rootScope) {


  // we will store all of our form data in this object
  $rootScope.formImpact = {};

  // function to process the form
  $scope.processForm = function(){

    console.log($scope.formImpact);
    console.log($location.path());
    $location.path('/formAction/envision'); 
      //saveForm1.saveForm1data(form1Data);
  };

})