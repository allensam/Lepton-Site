// initiates angular app
var app = angular.module('app', []);
/* controller for this page
@param {string}
*/
app.controller('testing', function($scope) {
  //binding text area
$scope.angular_example = "$scope.showNewDiv = true;"

  /* method evulates code in binded area
  @param {string}
  */
  function evaluatetor(inputcode) {
    eval(inputcode);
  }
  var input = $scope.angular_example;
  evaluatetor(input);

  $scope.runCode = function() {
    var inputtest = $scope.angular_example
    evaluatetor(inputtest);
  }
});
