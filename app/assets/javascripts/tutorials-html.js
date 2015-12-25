var html = angular.module('html', []);
html.run(function () {
  htmlExample.set_editor_text("<div> test</div>")
})

html.controller('page', function () {

});

html.directive('htmlExample', function () {
  return {
    template: '{{htmlExample}}'
  }
})
