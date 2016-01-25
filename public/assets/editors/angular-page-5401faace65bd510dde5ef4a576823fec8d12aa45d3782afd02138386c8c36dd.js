'use strict';
//intro to angular
var example_of_angular = new Editor("example_of_angular", "javascript");

//trying out tabbed editors
var start_angular_js = new Editor("start_angular_js", "javascript");
var start_angular_html = new Editor("start_angular_html", "html");
var start_angular_js_text = "// the varible is the name the module is accesible in the javascript\n// the name inside the module is the name used to bootstrap the document to the javascript\n// the names are typically kept the same unless you want to confuse the fuck out of yourself\n// the brackets you can put other modules\ndvar moduleName = angular.module('moduleName', []);\n\nmoduleName.run(function () {\n  //code run on angular loaded and document bootstrapped\n});\n\nmoduleName.config(function () {\n  // here goes configuration\n});\n\nmoduleName.controller('controllerName', function () {\n  //this is where the document is controlled\n});\n\nmoduleName.directive('directiveName', function () {\n  //this is where the template creation goes\n});";
start_angular_js.set_editor_text(start_angular_js_text);
var start_angular_html_text = "<head>\n  <!-- fancy html stuff here -->\n  <!-- load javascript angular.js always goes first!!! -->\n  <script src=\"js/angular.js\"></script>\n  <script src=\"js/app.js\"></script>\n</head>\n<!-- start of document bootstrap -->\n<body ng-app=\"moduleName\">\n\n  <!-- bind a controller to an element -->\n  <div ng-controller=\"controllerName\">\n  </div>\n\n  <!-- more fancy html -->\n</body>\n  ";
start_angular_html.set_editor_text(start_angular_html_text);

start_angular_js.set_editor_rw(true);
start_angular_html.set_editor_rw(true);
