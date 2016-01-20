(function() {
  Teaspoon.Reporters.BaseView = (function() {
    function BaseView() {
      this.elements = {};
      this.build();
    }

    BaseView.prototype.build = function(className) {
      return this.el = this.createEl("li", className);
    };

    BaseView.prototype.appendTo = function(el) {
      return el.appendChild(this.el);
    };

    BaseView.prototype.append = function(el) {
      return this.el.appendChild(el);
    };

    BaseView.prototype.createEl = function(type, className) {
      var el;
      if (className == null) {
        className = "";
      }
      el = document.createElement(type);
      el.className = className;
      return el;
    };

    BaseView.prototype.findEl = function(id) {
      var base;
      this.elements || (this.elements = {});
      return (base = this.elements)[id] || (base[id] = document.getElementById("teaspoon-" + id));
    };

    BaseView.prototype.setText = function(id, value) {
      var el;
      el = this.findEl(id);
      return el.innerHTML = value;
    };

    BaseView.prototype.setHtml = function(id, value, add) {
      var el;
      if (add == null) {
        add = false;
      }
      el = this.findEl(id);
      if (add) {
        return el.innerHTML += value;
      } else {
        return el.innerHTML = value;
      }
    };

    BaseView.prototype.setClass = function(id, value) {
      var el;
      el = this.findEl(id);
      return el.className = value;
    };

    BaseView.prototype.htmlSafe = function(str) {
      var el;
      el = document.createElement("div");
      el.appendChild(document.createTextNode(str));
      return el.innerHTML;
    };

    return BaseView;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Teaspoon.Reporters.HTML.SpecView = (function(superClass) {
    var viewId;

    extend(SpecView, superClass);

    viewId = 0;

    function SpecView(spec1, reporter) {
      this.spec = spec1;
      this.reporter = reporter;
      this.views = this.reporter.views;
      this.spec.viewId = viewId += 1;
      this.views.specs[this.spec.viewId] = this;
      SpecView.__super__.constructor.apply(this, arguments);
    }

    SpecView.prototype.build = function() {
      var classes;
      classes = ["spec"];
      if (this.spec.pending) {
        classes.push("state-pending");
      }
      SpecView.__super__.build.call(this, classes.join(" "));
      this.el.innerHTML = "<a href=\"" + this.spec.link + "\">" + (this.htmlSafe(this.spec.description)) + "</a>";
      this.parentView = this.buildParent();
      return this.parentView.append(this.el);
    };

    SpecView.prototype.buildParent = function() {
      var parent, view;
      parent = this.spec.parent;
      if (!parent) {
        return this.reporter;
      }
      if (parent.viewId) {
        return this.views.suites[parent.viewId];
      } else {
        view = new (Teaspoon.resolveClass("Reporters.HTML.SuiteView"))(parent, this.reporter);
        return this.views.suites[view.suite.viewId] = view;
      }
    };

    SpecView.prototype.buildErrors = function() {
      var div, error, html, i, len, ref;
      div = this.createEl("div");
      html = "";
      ref = this.spec.errors();
      for (i = 0, len = ref.length; i < len; i++) {
        error = ref[i];
        html += "<strong>" + (this.htmlSafe(error.message)) + "</strong><br/>" + (this.htmlSafe(error.stack || "Stack trace unavailable"));
      }
      div.innerHTML = html;
      return this.append(div);
    };

    SpecView.prototype.updateState = function(spec, elapsed) {
      var result;
      result = spec.result();
      this.clearClasses();
      if (result.status === "pending") {
        return this.updatePending(spec, elapsed);
      } else if (result.status === "failed") {
        return this.updateFailed(spec, elapsed);
      } else if (result.skipped) {
        return this.updateDisabled(spec, elapsed);
      } else {
        return this.updatePassed(spec, elapsed);
      }
    };

    SpecView.prototype.updatePassed = function(spec, elapsed) {
      this.addStatusClass("passed");
      if (elapsed > Teaspoon.slow) {
        this.addClass("slow");
      }
      return this.el.innerHTML += "<span>" + elapsed + "ms</span>";
    };

    SpecView.prototype.updateFailed = function(spec, elapsed) {
      var base;
      this.addStatusClass("failed");
      this.buildErrors();
      return typeof (base = this.parentView).updateState === "function" ? base.updateState("failed") : void 0;
    };

    SpecView.prototype.updatePending = function(spec, elapsed) {
      return this.addStatusClass("pending");
    };

    SpecView.prototype.updateDisabled = function(spec, elapsed) {};

    SpecView.prototype.clearClasses = function() {
      return this.el.className = "";
    };

    SpecView.prototype.addStatusClass = function(status) {
      return this.addClass("state-" + status);
    };

    SpecView.prototype.addClass = function(name) {
      return this.el.className += " " + name;
    };

    return SpecView;

  })(Teaspoon.Reporters.BaseView);

}).call(this);
