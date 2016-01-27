'use strict';
// google-analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-72779894-1', 'auto');
ga('send', 'pageview');
// initiates angular app
var javascriptModule = angular.module('javascriptModule', []);
/** controller for this page
 * @param $scope [string] injects angular scope
 */
 javascriptModule.controller('testing', ['$scope', function($scope) {
  $scope.showNewDiv = false;
  $scope.runCode = function(name) {
    var input_error = "$scope." + name + " = 'Error feedback is here!';";
    eval(input_error);
    var passed = false;
    var input = eval(name + ".return_text_in_editor();");
    try {
      eval(input + " passed = true;");
    } catch(e) {
      document.getElementById('style-' + name).style.color = "red";
      var finalMessage = e.message.charAt(0).toUpperCase() + e.message.slice(1);
      eval("$scope." + name + " = " + "'" + finalMessage + ".'" + ";");
    } finally {
      if (passed == true) {
        document.getElementById('style-' + name).style.color = "#aaa";
        eval("$scope." + name + " = 'no Errors! :)';");
      }
    }

  }
}]);

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
htmlModule.config(['$sceProvider', function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
}]);
htmlModule.run(['$rootScope', function ($rootScope) {
  document.onkeyup = function(evt) {
    var input = getHtmlBindClasses();
      eval(input)
      $rootScope.$digest();
  }
}]);
htmlModule.controller('htmlBind', ['$rootScope', function ($rootScope) {
    var input = getHtmlBindClasses();
    eval(input)
}]);
angular.module("bothModules", ["javascriptModule", "htmlModule"]);
