'use strict';
// initiates angular app
var angular_page = angular.module('angular_page', []);
/** controller for this page
 * @param $scope [string] injects angular scope
 */
angular_page.controller('testing', function($scope) {
  $scope.showNewDiv = false;
  $scope.runCode = function(name) {
    var input_error = "$scope." + name + " = 'Error feedback is here!';";
    eval(input_error);
    var passed = false;
    let input = eval(name + ".return_text_in_editor();");
    try {
      eval(input + " passed = true;");
    } catch(e) {
      eval("$scope." + name + " = " + "'" + e.message + "'" + ";");
    } finally {
      if (passed == true) {
        eval("$scope." + name + " = 'no Errors! :)';");
      }
    }

  }
});
