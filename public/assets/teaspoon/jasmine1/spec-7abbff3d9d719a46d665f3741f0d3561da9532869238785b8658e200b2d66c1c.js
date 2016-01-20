(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Teaspoon.Jasmine1.Spec = (function(superClass) {
    extend(Spec, superClass);

    function Spec(spec) {
      this.spec = spec;
      this.fullDescription = this.spec.getFullName();
      this.description = this.spec.description;
      this.link = this.filterUrl(this.fullDescription);
      this.parent = this.spec.suite;
      this.suiteName = this.parent.getFullName();
      this.viewId = this.spec.viewId;
      this.pending = this.spec.pending;
    }

    Spec.prototype.errors = function() {
      var i, item, len, ref, results1;
      if (!this.spec.results) {
        return [];
      }
      ref = this.spec.results().getItems();
      results1 = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        if (item.passed()) {
          continue;
        }
        results1.push({
          message: item.message,
          stack: item.trace.stack
        });
      }
      return results1;
    };

    Spec.prototype.getParents = function() {
      var parent;
      if (this.parents) {
        return this.parents;
      }
      this.parents || (this.parents = []);
      parent = this.parent;
      while (parent) {
        parent = new Teaspoon.Jasmine1.Suite(parent);
        this.parents.unshift(parent);
        parent = parent.parent;
      }
      return this.parents;
    };

    Spec.prototype.result = function() {
      var results, status;
      results = this.spec.results();
      status = "failed";
      if (results.passed()) {
        status = "passed";
      }
      if (this.spec.pending) {
        status = "pending";
      }
      return {
        status: status,
        skipped: results.skipped
      };
    };

    return Spec;

  })(Teaspoon.Spec);

}).call(this);
