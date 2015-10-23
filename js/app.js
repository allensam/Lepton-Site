var yeezyweb = angular.module('yeezy', ['yeezy.controllers', 'yeezy.services', 'ui.router']);


yeezyweb.run(function ($state, $rootScope, $stateParams) {
    //makes yeezystates work with yeezyhtml5
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

yeezyweb.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var yeezytrue = true;
    var yeezyfalse = false;
    //enables html5 mode

    //states
    $stateProvider
        .state('yeezyhome', {
            url: '',
            templateUrl: '/yeezystates/yeezyhome.html',
            controller: 'yeezyHomeYeezyCtrl'
        })
        .state('yeezysidebar', {
            abstract: yeezytrue,
            url: '/learn',
            templateUrl: '/yeezystates/yeezysidebar.html'
        })
        .state('yeezysidebar.yeezyintro', {
            url: '/angular',
            templateUrl: '/yeezystates/yeezyintro.html',
            controller: 'yeezyAngularYeezyCtrl'
        })
        .state('yeezysidebar.yeezyangular', {
            url: '/angular',
            templateUrl: '/yeezystates/yeezyangular.html',
            controller: 'yeezyAngularYeezyCtrl'
        })
        .state('yeezysidebar.yeezyhtml', {
            url: '/html',
            templateUrl: '/yeezystates/yeezyhtml.html',
            controller: 'yeezyHtmlYeezyCtrl'
        })
        .state('yeezyvision', {
            url: '/vision',
            templateUrl: '/yeezystates/yeezyvision.html',
            controller: 'yeezyHtmlYeezyCtrl'
        })
});
