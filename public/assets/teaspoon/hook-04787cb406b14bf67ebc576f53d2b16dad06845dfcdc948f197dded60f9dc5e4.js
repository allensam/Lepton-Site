(function() {
  Teaspoon.hook = function(name, payload) {
    var xhr, xhrRequest;
    if (payload == null) {
      payload = {};
    }
    xhr = null;
    xhrRequest = function(url, payload, callback) {
      var e, error, error1;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (error) {
          e = error;
          try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (error1) {
            e = error1;
          }
        }
      }
      if (!xhr) {
        throw "Unable to make Ajax Request";
      }
      xhr.onreadystatechange = callback;
      xhr.open("POST", Teaspoon.root + "/" + url, false);
      xhr.setRequestHeader("Content-Type", "application/json");
      return xhr.send(JSON.stringify({
        args: payload
      }));
    };
    return xhrRequest(Teaspoon.suites.active + "/" + name, payload, function() {
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status !== 200) {
        throw "Unable to call hook \"" + url + "\".";
      }
    });
  };

}).call(this);
