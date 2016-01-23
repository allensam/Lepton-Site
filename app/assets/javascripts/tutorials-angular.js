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

function getHtmlBindClasses() {
  var ids = [];
  var binds =  document.getElementsByClassName('bind-html');
  for (var i = 0; i < binds.length; i++) {
    var id = binds[i].id;
      var string = "$rootScope." + id + " = " + id + ".return_text_in_editor(); ";
      return string
  }
}

var htmlModule = angular.module('htmlModule', []);
htmlModule.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
})
.run(function ($rootScope) {
  document.onkeyup = function(evt) {
    var input = getHtmlBindClasses();
      eval(input)
      $rootScope.$digest();
  }
})
.controller('htmlBind', function ($rootScope) {
    var input = getHtmlBindClasses();
    eval(input)
});
angular.module("bothModules", ["javascriptModule", "htmlModule"]);
