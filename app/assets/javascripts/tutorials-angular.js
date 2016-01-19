'use strict';
// initiates angular app
var angular_page = angular.module('angular_page', []);
/** controller for this page
 * @param $scope [string] injects angular scope
 */
angular_page.controller('testing', function($scope) {
  $scope.showNewDiv = false;
  $scope.testing = "no errors";
  $scope.runCode = function(name) {

    var passed = false;
    var input = eval(name + ".return_text_in_editor();");
    try {
      eval(input + "passed = true;")
    } catch(e) {
      $scope.testing = e.message;
    } finally {
      if (passed == true) {
        $scope.testing = "No erros! :)"
      }
    }

  }
});
