'use strict';
// initiates angular app
var angular_page = angular.module('angular_page', []);
/** controller for this page
* @param $scope [string] injects angular scope
*/
angular_page.controller('testing', function($scope) {
  $scope.showNewDiv = false;
  /** method evulates code in binded area
  * @param inputcode [string] the code in the text area
  */
  function evaluatetor(inputcode) {
    eval(inputcode);
  }
  $scope.runCode = function() {
    var input = example_of_angular.return_text_in_editor();
    evaluatetor(input);
  }
  // document.getElementById('editor').style.fontSize=`${fontsize} + px`;
  // document.getElementByClassName()
});
