(function() {
  var env, extend, setupSpecFilter;

  Teaspoon.setFramework(Teaspoon.Jasmine2);

  setupSpecFilter = function(env) {
    var grep;
    if (grep = Teaspoon.Runner.prototype.getParams()["grep"]) {
      return env.specFilter = function(spec) {
        return spec.getFullName().indexOf(grep) === 0;
      };
    }
  };

  extend = function(destination, source) {
    var property;
    for (property in source) {
      destination[property] = source[property];
    }
    return destination;
  };

  window.jasmine = jasmineRequire.core(jasmineRequire);

  env = window.jasmine.getEnv();

  setupSpecFilter(env);

  extend(window, jasmineRequire["interface"](jasmine, env));

}).call(this);
