// 'use strict'

// angular.module('formApp')
//   .factory('saveForm1', function($http){
//     var success = function(response) {
//           return  response;
//       };
//       var error = function(response) {
//           console.dir(response);
//       };
//       var saveForm1data = function(form1Data) {

//           var requestURL = CONFIG.contextURL + 'form1',
//                 data = form1Data;

//               return $http({
//                 url: requestURL,
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                   'Authorization': ''
//                 },
//                 data: data
//               }).then(success, error);
//       };
//       return {
//           saveForm1data: saveForm1data
//       };
//   });