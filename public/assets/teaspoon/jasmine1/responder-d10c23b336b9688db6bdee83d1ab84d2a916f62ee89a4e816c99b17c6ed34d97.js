(function() {
  Teaspoon.Jasmine1.Responder = (function() {
    function Responder(reporter) {
      this.reporter = reporter;
    }

    Responder.prototype.reportRunnerStarting = function(runner) {
      return this.reporter.reportRunnerStarting({
        total: runner.specs().length
      });
    };

    Responder.prototype.reportRunnerResults = function() {
      return this.reporter.reportRunnerResults();
    };

    Responder.prototype.reportSuiteResults = function(suite) {
      return this.reporter.reportSuiteResults(new Teaspoon.Jasmine1.Suite(suite));
    };

    Responder.prototype.reportSpecStarting = function(spec) {
      return this.reporter.reportSpecStarting(new Teaspoon.Jasmine1.Spec(spec));
    };

    Responder.prototype.reportSpecResults = function(spec) {
      return this.reporter.reportSpecResults(new Teaspoon.Jasmine1.Spec(spec));
    };

    return Responder;

  })();

}).call(this);
