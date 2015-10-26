var yeezyCtrl = angular.module('yeezy.controllers', []);

//controller for handling states makes it hella cleaner (hopefully)
yeezyCtrl.controller('statesCtrl', function () {

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
});
