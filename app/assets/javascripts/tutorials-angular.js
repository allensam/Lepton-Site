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
      ids.push(id);
  }
  console.log(ids)
  return ids
}

var htmlModule = angular.module('htmlModule', []);
htmlModule.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
})
.run(function ($rootScope) {
  document.onkeyup = function(evt) {
    var idArray = getHtmlBindClasses();
    for (var i = 0; i < idArray.length; i++) {
      var scopeInput = "$rootScope." + idArray[i] + " = " + idArray[i] + ".return_text_in_editor(); ";
      // var input = scopeInput + idArray[i] + ".get_session_on_change('change', function(e) { " + scopeInput + " })";
      eval(scopeInput)
      $rootScope.$digest();
    }
  }
});

htmlModule.controller('htmlBind', function ($rootScope) {
    var idArray = getHtmlBindClasses();
      for (var i = 0; i < idArray.length; i++) {
        var scopeInput = "$rootScope." + idArray[i] + " = " + idArray[i] + ".return_text_in_editor(); ";
        // var input = scopeInput + idArray[i] + ".get_session_on_change('change', function(e) { " + scopeInput + " })";
        eval(scopeInput)
    }
});
angular.module("bothModules", ["javascriptModule", "htmlModule"]);
