'use strict';
// google-analytics
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-72779894-1', 'auto');
ga('send', 'pageview');

function changeEditorFontSize(value) {
  var binds = document.getElementsByClassName('all-editors-class');
  for (var i = 0; i < binds.length; i++) {
    console.log(binds[i].id)
    document.getElementById(binds[i].id).style.fontSize = value;
  }
}


// initiates javascript module
var javascriptModule = angular.module('javascriptModule', []);
/** controller for this page
 * @param $scope [string] injects angular scope
 * @description confusing crap tbh
 */
javascriptModule.controller('testing', ['$scope', function($scope) {
  $scope.showNewDiv = false;
  $scope.runCode = function(name) {
    var input_error = "$scope." + name + " = 'Error feedback is here!';";
    eval(input_error);
    // creates varible passed is eval to true at the end of
    var passed = false;
    var input = eval(name + ".return_text_in_editor();");
    try {
      eval(input + " passed = true;");
    } catch (e) {
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


var htmlModule = angular.module('htmlModule', []);
htmlModule.config(['$sceProvider', function($sceProvider) {
  //disables html bind security
  $sceProvider.enabled(false);
}]);

htmlModule.controller('htmlBind', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.binderFunction = function(id) {
    var htmlString = "$rootScope." + id + " = " + id + ".return_text_in_editor(); ";
    eval(htmlString);
  }
  controllerStartUpListener();
}]);

// listens for keyup on specific elements
function keyUpEventListener(e) {
  var id = e.getAttribute('id');
  angular.element(document.getElementById('htmlBind')).scope().binderFunction(id);
  angular.element(document.getElementById('htmlBind')).scope().$apply();
}

// inits html bind when controller is fully loaded
function controllerStartUpListener() {
  var ids = [];
  var binds = document.getElementsByClassName('bind-html');
  for (var i = 0; i < binds.length; i++) {
    var id = binds[i].id;
    angular.element(document.getElementById('htmlBind')).scope().binderFunction(id);
  }
}
angular.module("bothModules", ["javascriptModule", "htmlModule"]);

angular.element(document).ready(function() {
  var angularModule = document.getElementById('ng-app');
  var moduleName = angularModule.getAttribute('data-module');
  angular.bootstrap(angularModule, [moduleName]);
});
