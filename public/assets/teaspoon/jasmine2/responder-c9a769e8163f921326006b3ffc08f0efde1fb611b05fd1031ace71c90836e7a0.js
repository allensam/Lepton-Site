(function() {
  Teaspoon.Jasmine2.Responder = (function() {
    function Responder(reporter) {
      this.reporter = reporter;
    }

    Responder.prototype.jasmineStarted = function(runner) {
      return this.reporter.reportRunnerStarting({
        total: runner.totalSpecsDefined
      });
    };

    Responder.prototype.jasmineDone = function() {
      return this.reporter.reportRunnerResults();
    };

    Responder.prototype.suiteStarted = function(suite) {
      if (this.currentSuite) {
        suite.parent = this.currentSuite;
      }
      this.currentSuite = suite;
      return this.reporter.reportSuiteStarting(new Teaspoon.Jasmine2.Suite(suite));
    };

    Responder.prototype.suiteDone = function(suite) {
      this.currentSuite = this.currentSuite.parent;
      return this.reporter.reportSuiteResults(new Teaspoon.Jasmine2.Suite(suite));
    };

    Responder.prototype.specStarted = function(spec) {
      if (jasmine.getEnv().specFilter({
        getFullName: function() {
          return spec.fullName;
        }
      })) {
        spec.parent = this.currentSuite;
        return this.reporter.reportSpecStarting(new Teaspoon.Jasmine2.Spec(spec));
      }
    };

    Responder.prototype.specDone = function(spec) {
      spec.parent = this.currentSuite;
      return this.reporter.reportSpecResults(new Teaspoon.Jasmine2.Spec(spec));
    };

    return Responder;

  })();

}).call(this);
