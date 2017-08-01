
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
var app = angular.module('formApp', ['ngAnimate', 'ui.router']);

// configuring our routes
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {

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
        })
        .state('conclusion', {
            url: '/conclusion',
            templateUrl: 'views/conclusion/index.html',
            controller: 'formConclusionCtrl'
        });

    $urlRouterProvider.otherwise('/form/profile');
    //$urlRouterProvider.otherwise('/formAction/envision');

});



