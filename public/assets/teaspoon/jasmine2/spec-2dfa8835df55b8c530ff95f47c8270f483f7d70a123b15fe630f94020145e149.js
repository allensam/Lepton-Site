(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Teaspoon.Jasmine2.Spec = (function(superClass) {
    extend(Spec, superClass);

    function Spec(spec) {
      this.spec = spec;
      this.fullDescription = this.spec.fullName;
      this.description = this.spec.description;
      this.link = this.filterUrl(this.fullDescription);
      this.parent = this.spec.parent;
      if (this.parent) {
        this.suiteName = this.parent.fullName;
      }
      this.viewId = this.spec.id;
      this.pending = this.spec.status === "pending";
    }

    Spec.prototype.errors = function() {
      var i, item, len, ref, results;
      if (!this.spec.failedExpectations.length) {
        return [];
      }
      ref = this.spec.failedExpectations;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        results.push({
          message: item.message,
          stack: item.stack
        });
      }
      return results;
    };

    Spec.prototype.getParents = function() {
      var parent;
      if (this.parents) {
        return this.parents;
      }
      this.parents || (this.parents = []);
      parent = this.parent;
      while (parent) {
        parent = new Teaspoon.Jasmine2.Suite(parent);
        this.parents.unshift(parent);
        parent = parent.parent;
      }
      return this.parents;
    };

    Spec.prototype.result = function() {
      return {
        status: this.status(),
        skipped: this.spec.status === "disabled" || this.pending
      };
    };

    Spec.prototype.status = function() {
      if (this.spec.status === "disabled") {
        return "passed";
      } else {
        return this.spec.status;
      }
    };

    return Spec;

  })(Teaspoon.Spec);

}).call(this);
