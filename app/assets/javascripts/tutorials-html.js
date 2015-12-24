var html = angular.module('html', []);

html.controller('page', function () {

});

html.directive('htmlExample', function () {
  return {
    template: '{{htmlExample}}'
  }
})
