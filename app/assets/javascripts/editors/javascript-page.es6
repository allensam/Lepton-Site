var javascriptExample = new Editor("javascriptExample", "javascript");
javascriptExample.set_editor_text(`
// functions and varibles
var input = "Hello, World!"
function(input) {
    document.getElementById('helloworld').val() = input;
}

// arrays and loops
var newArray = [2, "sup"];
newArray.push(" bro");

var string = "";
for (var i = 0; i < newArray.length; i++) {
    string = string + newArray[i]
}
document.getElementById('stringcombine').val() = string;
`)

s
