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
        // yeezy home
        .state('yeezyhome', {
            url: '',
            templateUrl: '/yeezystates/yeezyhome.html',
            controller: 'yeezyHomeYeezyCtrl'
        })
        // abstract for /learn sidebar
        .state('yeezysidebar', {
            abstract: yeezytrue,
            url: '/learn',
            templateUrl: '/yeezystates/yeezysidebar.html'
        })
        // learn intro
        .state('yeezysidebar.yeezyintro', {
            url: '/angular',
            templateUrl: '/yeezypartials/yeezyintro.html'
        })
        // learn angular
        .state('yeezysidebar.yeezyangular', {
            url: '/angular',
            templateUrl: '/yeezypartials/yeezyangular.html'
        })
        // learn html
        .state('yeezysidebar.yeezyhtml', {
            url: '/html',
            templateUrl: '/yeezypartials/yeezyhtml.html'
        })
        // learn php
        .state('yeezysidebar.yeezyphp', {
            url: '/php',
            templateUrl: '/yeezypartials/yeezyphp.html'
        })
        // learn css
        .state('yeezysidebar.yeezycss', {
            url: '/css',
            templateUrl: '/yeezypartials/yeezycss.html'
        })
        // learn nodejs
        .state('yeezysidebar.yeezynode', {
            url: '/nodejs',
            templateUrl: '/yeezypartials/yeezynode.html'
        })
        // learn ruby
        .state('yeezysidebar.yeezyruby', {
            url: '/ruby',
            templateUrl: '/yeezypartials/yeezyruby.html'
        })
        // yeezy vision
        .state('yeezyvision', {
            url: '/vision',
            templateUrl: '/yeezystates/yeezyvision.html',
            controller: 'yeezyHtmlYeezyCtrl'
        });
    $urlRouterProvider.otherwise('/');
});
