var yeezyCtrl = angular.module('yeezy.controllers', []);

yeezyCtrl.controller('yeezyHomeYeezyCtrl', function () {

});

yeezyCtrl.controller('yeezyAngularYeezyCtrl', function ($scope) {
    $scope.products = yeezyangular;


    var yeezyangular = [{
        name: 'Yeezy',
        description: "ff"

    }, {
        name: 'Yeezfy',
        description: "f"

    }]
});

yeezyCtrl.controller('yeezyHtmlYeezyCtrl', function () {

});

yeezyCtrl.controller('yeezySideBarCtrl', function ($scope) {
    console.log('ran yeezysidebarctrl');
    $scope.products = [{
        name: 'YeezyApp',
        description: "f"
    }, {
        name: 'YeezysControllers',
        description: "f"
    }];
    $scope.textarea = function () {
        $scope.testss = "works"
    }


});