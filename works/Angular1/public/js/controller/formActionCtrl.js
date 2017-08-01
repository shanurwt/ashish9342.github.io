app.controller('formActionController', function ($scope, $http, $rootScope, $location) {

  // we will store all of our form data in this object
  $rootScope.formAction = {};
  $scope.limit = 3;
  $scope.checked = 0;

  $scope.checkChanged = function(){
      $scope.checked++;
       //else $scope.checked--;
   }



    // $http.get('../data/development.json').success (function(data) {
    //   console.log(data);
    //   $rootScope.dev = data;
    // });
    // $http.get('../data/combination.json').success (function(data) {
    //   console.log(data);
    //   $rootScope.contents1 = data;
    // });
    // $http.get('../data/appType.json').success (function(data) {
    //   console.log(data);
    //   $rootScope.contents = data;
    // });
    $rootScope.dev = {
      "D1" : "Use Enterprise Application platform to extend mobile capability",
      "D2" : "Use a MADP solution",
      "D3" : "Open source framework (React Native, NativeScript, Apache Cordova etc.)",
      "D4" : "HTML5, javascript",
      "D5" : "RMAD / Low-code tools (Newer Tech Trend)"
    };

    $rootScope.contents1 = {
      "123":"C2",
      "124":"C2",
      "125":"C2",
      "126":"C2",
      "134":"C2",
      "135":"C3",
      "136":"C2",
      "145":"C2",
      "146":"C2",
      "156":"C2",
      "234":"C2",
      "235":"C2",
      "236":"C2",
      "245":"C2",
      "246":"C1",
      "256":"C2",
      "345":"C2",
      "346":"C2",
      "356":"C2",
      "456":"C2"
    };
    $rootScope.contents = {
      "C1":"Native app",
      "C2":"Hybrid app - mix of webview and native container",
      "C3":"Responsive web app - using html5"
    };



    // function to process the form
      $scope.processForm1 = function(){
        // C Logic Starts
        console.log(Object.keys($rootScope.formAction.parameter));
        var arr = Object.keys($rootScope.formAction.parameter);
        console.log(arr.join(''));
        arr = arr.join('');
        //console.log(typeof arr);

        if (arr in $rootScope.contents1){
          console.log($rootScope.contents1[arr]);
          var recomendAns = $rootScope.contents1[arr]
        }

        if(recomendAns in $rootScope.contents){
          console.log($rootScope.contents[recomendAns]);
          var dlogic = $rootScope.contents[recomendAns];
          sessionStorage.setItem('appType', dlogic);
        }

        // C Logic ends

        // D Logic Starts
        var reccommendation;
        if($rootScope.formAction.logic === 'yes' && $rootScope.formAction.businessLogic === 'SAP/Oracle /Microsoft / SFDC'){
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
        }else if($rootScope.formAction.logic === 'yes' && $rootScope.formAction.businessLogic === 'Others'){
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
          sessionStorage.setItem('approach', App);

        }

        // D Logic Ends

        $location.path('/conclusion');


      };//function submit ends

  });