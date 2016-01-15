var html = angular.module('html', []);
html.run(function () {
  htmlExample.set_editor_text("<div> test</div>")
})

html.controller('page', function () {
  $scope.htmlExample = htmlExample.return_text_in_editor();
  $scope.runCode = function () {
es
    $scope.apply();
  }
});

html.directive('htmlExample', function () {
  return {
    template: '{{htmlExample}}'
  }
})
