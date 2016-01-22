'use strict';
//intro to angular
var example_of_angular = new Editor("example_of_angular", "javascript");

//trying out tabbed editors
var start_angular_js = new Editor("start_angular_js", "javascript");
var start_angular_html = new Editor("start_angular_html", "html");
var start_angular_js_text = `// the varible is the name the module is accesible in the javascript
// the name inside the module is the name used to bootstrap the document to the javascript
// the names are typically kept the same unless you want to confuse the fuck out of yourself
// the brackets you can put other modules
dvar moduleName = angular.module('moduleName', []);

moduleName.run(function () {
  //code run on angular loaded and document bootstrapped
});

moduleName.config(function () {
  // here goes configuration
});

moduleName.controller('controllerName', function () {
  //this is where the document is controlled
});

moduleName.directive('directiveName', function () {
  //this is where the template creation goes
});`;
start_angular_js.set_editor_text(start_angular_js_text);
var start_angular_html_text = `<head>
  <!-- fancy html stuff here -->
  <!-- load javascript angular.js always goes first!!! -->
  <script src="js/angular.js"></script>
  <script src="js/app.js"></script>
</head>
<!-- start of document bootstrap -->
<body ng-app="moduleName">

  <!-- bind a controller to an element -->
  <div ng-controller="controllerName">
  </div>

  <!-- more fancy html -->
</body>
  `;
start_angular_html.set_editor_text(start_angular_html_text);

start_angular_js.set_editor_rw(true);
start_angular_html.set_editor_rw(true);
