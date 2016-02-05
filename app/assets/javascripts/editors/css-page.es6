'use strict';
var cssExample = new Editor("cssExample", "css");
cssExample.set_editor_text(`
#firstDiv {
  height: 30px;
  width: 200px;
  padding: 10px;
  background-color: #333;
}
#secondDiv {
  background-color: red;
}
  `);
var htmlcssExample = `
<div id="firstDiv">
  test
</div>
<div id="secondDiv">
  test
</div>
`
