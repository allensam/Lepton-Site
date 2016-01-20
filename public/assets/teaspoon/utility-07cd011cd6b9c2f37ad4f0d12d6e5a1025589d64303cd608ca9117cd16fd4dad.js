(function() {
  Teaspoon.Utility = (function() {
    function Utility() {}

    Utility.extend = function(obj, mixin) {
      var method, name;
      for (name in mixin) {
        method = mixin[name];
        obj[name] = method;
      }
      return obj;
    };

    Utility.include = function(klass, mixin) {
      return this.extend(klass.prototype, mixin);
    };

    return Utility;

  })();

}).call(this);
