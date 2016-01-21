'use strict';
// initiates angular app
var javascriptModule = angular.module('javascriptModule', []);
/** controller for this page
 * @param $scope [string] injects angular scope
 */
 javascriptModule.controller('testing', function($scope) {
  $scope.showNewDiv = false;
  $scope.runCode = function(name) {
    var input_error = "$scope." + name + " = 'Error feedback is here!';";
    eval(input_error);
    var passed = false;
    var input = eval(name + ".return_text_in_editor();");
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

var htmlModule = angular.module('htmlModule', []);
angular.bootstrap(document, ['javascriptModule', 'htmlModule']);
