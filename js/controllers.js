var yeezyCtrl = angular.module('yeezy.controllers', []);

yeezyCtrl.controller('yeezySideBarCtrl', function ($scope) {
    var classes = {
        intro: false,
        angular: false,
        html: false
    };
    $scope.applyBoldClass = function () {

    }
});

yeezyCtrl.controller('yeezyHomeYeezyCtrl', function () {

});

yeezyCtrl.controller('yeezyAngularYeezyCtrl', function () {
    this.angularinfo = yeezyangular;
    var yeezyangular = [{
        name: 'Yeezy App',
        description: "f"

    }, {
        name: 'Yeezy Controllers',
        description: "f"

    }]
});

yeezyCtrl.controller('yeezyHtmlYeezyCtrl', function () {

});