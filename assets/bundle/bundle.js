System.registerDynamic("npm:core-js@1.2.6/library/modules/$.js", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:core-js@1.2.6/library/fn/object/define-property.js", ["npm:core-js@1.2.6/library/modules/$.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var $ = $__require('npm:core-js@1.2.6/library/modules/$.js');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/core-js/object/define-property.js", ["npm:core-js@1.2.6/library/fn/object/define-property.js"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {
    "default": $__require('npm:core-js@1.2.6/library/fn/object/define-property.js'),
    __esModule: true
  };
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/create-class.js", ["npm:babel-runtime@5.8.35/core-js/object/define-property.js"], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _Object$defineProperty = $__require('npm:babel-runtime@5.8.35/core-js/object/define-property.js')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("npm:babel-runtime@5.8.35/helpers/class-call-check.js", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  global.define = __define;
  return module.exports;
});

System.register("greeter.js", ["npm:babel-runtime@5.8.35/helpers/create-class.js", "npm:babel-runtime@5.8.35/helpers/class-call-check.js"], function (_export) {
    var _createClass, _classCallCheck, Greeter;

    return {
        setters: [function (_npmBabelRuntime5835HelpersCreateClassJs) {
            _createClass = _npmBabelRuntime5835HelpersCreateClassJs["default"];
        }, function (_npmBabelRuntime5835HelpersClassCallCheckJs) {
            _classCallCheck = _npmBabelRuntime5835HelpersClassCallCheckJs["default"];
        }],
        execute: function () {
            "use strict";

            Greeter = (function () {
                function Greeter() {
                    _classCallCheck(this, Greeter);
                }

                _createClass(Greeter, [{
                    key: "greet",
                    value: function greet(person) {
                        return "Hello " + person + "!";
                    }
                }]);

                return Greeter;
            })();

            _export("Greeter", Greeter);
        }
    };
});
System.register("welcome.js", ["greeter.js"], function (_export) {
    "use strict";

    var Greeter, greeter;

    _export("welcome", welcome);

    function welcome(name) {
        alert(greeter.greet(name));
    }

    return {
        setters: [function (_greeterJs) {
            Greeter = _greeterJs.Greeter;
        }],
        execute: function () {
            greeter = new Greeter();
        }
    };
});
//# sourceMappingURL=bundle.js.map