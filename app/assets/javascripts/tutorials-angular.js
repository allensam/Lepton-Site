'use strict';
// initiates angular app
var angular_page = angular.module('angular_page', []);
/** controller for this page
* @param $scope [string] injects angular scope
*/
angular_page.controller('testing', function($scope) {
  $scope.showNewDiv = false;
  $scope.runCode = function(name) {
    var input = eval(name + ".return_text_in_editor();");
    eval(input);
  }
});
