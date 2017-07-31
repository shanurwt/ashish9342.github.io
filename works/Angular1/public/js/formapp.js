
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('form', {
            url: '/form',
            templateUrl: 'views/impact/form.html',
            controller: 'formController'
        })
        .state('form.functionalities', {
            url: '/functionalities',
            templateUrl: 'views/impact/form-functionalities.html'
        })
        .state('form.target', {
            url: '/target',
            templateUrl: 'views/impact/form-target.html'
        })
        .state('form.potential', {
            url: '/potential',
            templateUrl: 'views/impact/form-potential.html'
        })
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'views/impact/form-profile.html'
        })
        .state('form.interests', {
            url: '/strategy',
            templateUrl: 'views/impact/form-interests.html'
        })
        .state('form.payment', {
            url: '/submit',
            templateUrl: 'views/impact/form-payment.html'
        })
        // next form
        .state('formAction', {
            url: '/formAction',
            templateUrl: 'views/action/formAction.html',
            controller: 'formActionController'
        })
        .state('formAction.envision', {
            url: '/envision',
            templateUrl: 'views/action/form-envision.html'
         })
        .state('formAction.parameters', {
            url: '/parameters',
            templateUrl: 'views/action/form-parameters.html'
        })
        .state('formAction.logic', {
            url: '/logic',
            templateUrl: 'views/action/form-logic.html'
        })
        .state('formAction.urgency', {
            url: '/urgency',
            templateUrl: 'views/action/form-urgency.html'
        })
        .state('formAction.inhouse', {
            url: '/in-house',
            templateUrl: 'views/action/form-inhouse.html'
        })
        .state('formAction.model', {
            url: '/model',
            templateUrl: 'views/action/form-model.html'
        })
        .state('formAction.licences', {
            url: '/licences',
            templateUrl: 'views/action/form-licences.html'
        })
        .state('formAction.submit', {
            url: '/submit',
            templateUrl: 'views/action/form-submit.html'
        });

    $urlRouterProvider.otherwise('/form/profile');
    //$urlRouterProvider.otherwise('/formAction/envision');



})

// our controller for the form
    .controller('formController', function ($scope, $location) {

    // we will store all of our form data in this object
    $scope.formImpact = {};

    // function to process the form
    $scope.processForm = function(){
      console.log($scope.formImpact);
      console.log($location.path());
      $location.path('/formAction/envision');
        //saveForm1.saveForm1data(form1Data);
    };

})
  .controller('formActionController', function ($scope, $http, $rootScope) {

  // we will store all of our form data in this object
  $scope.formAction = {};
  $scope.limit = 3;
  $scope.checked = 0;

  $scope.checkChanged = function(){
      $scope.checked++;
       //else $scope.checked--;
   }



    $http.get('../data/development.json').success (function(data) {
      console.log(data);
      $rootScope.dev = data;
    });
    $http.get('../data/combination.json').success (function(data) {
      console.log(data);
      $rootScope.contents1 = data;
    });
    $http.get('../data/appType.json').success (function(data) {
      console.log(data);
      $rootScope.contents = data;
    });


    // function to process the form
      $scope.processForm = function(){
        // C Logic Starts
        console.log(Object.keys($scope.formAction.parameter));
        var arr = Object.keys($scope.formAction.parameter);
        console.log(arr.join(''));
        arr = arr.join('');
        console.log(typeof arr);

        if (arr in $rootScope.contents1){
          console.log($rootScope.contents1[arr]);
          var recomendAns = $rootScope.contents1[arr]
        }

        if(recomendAns in $rootScope.contents){
          console.log($rootScope.contents[recomendAns]);
          var dlogic = $rootScope.contents[recomendAns];
        }

        // C Logic ends

        // D Logic Starts
        var reccommendation;
        if($scope.formAction.logic === 'yes' && $scope.formAction.businessLogic === 'SAP/Oracle /Microsoft / SFDC'){
          console.log('SAP/Oracle /Microsoft / SFDC');
          console.log(recomendAns);
            switch (recomendAns) {
                case 'C1':
                    reccommendation = "D2";
                    break;
                case 'C2':
                    reccommendation = "D1";
                    break;
                case 'C3':
                    reccommendation = "D4";
              }
              console.log(reccommendation);
        }else if($scope.formAction.logic === 'yes' && $scope.formAction.businessLogic === 'Others'){
          console.log('SAP/Oracle /Microsoft / SFDC');
          console.log(recomendAns);


          switch (recomendAns) {
              case 'C1':
                  reccommendation = "D3";
                  break;
              case 'C2':
                  reccommendation = "D2";
                  break;
              case 'C3':
                  reccommendation = "D4";
            }
            console.log(reccommendation);

        }else{
          console.log('no');
          console.log(recomendAns);
          switch (recomendAns) {
              case 'C1':
                  reccommendation = "D3";
                  break;
              case 'C2':
                  reccommendation = "D3";
                  break;
              case 'C3':
                  reccommendation = "D4";
            }
            console.log(reccommendation);
        }

        if(reccommendation in $rootScope.dev){
          console.log($rootScope.dev[reccommendation]);
          var App = $rootScope.dev[reccommendation];
        }

        // D Logic Ends

      };//function submit ends

  });

