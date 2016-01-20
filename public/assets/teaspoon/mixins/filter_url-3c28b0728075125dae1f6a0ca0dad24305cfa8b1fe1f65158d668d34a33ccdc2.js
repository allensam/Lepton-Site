(function() {
  Teaspoon.Mixins.FilterUrl = {
    filterUrl: function(grep) {
      var params;
      params = [];
      params.push("grep=" + (encodeURIComponent(grep)));
      if (Teaspoon.params.file) {
        params.push("file=" + Teaspoon.params.file);
      }
      return "?" + (params.join("&"));
    }
  };

}).call(this);
