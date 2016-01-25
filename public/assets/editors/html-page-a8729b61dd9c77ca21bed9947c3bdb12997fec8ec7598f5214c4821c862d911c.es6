'use strict';
var htmlExample = new Editor("htmlExample", "html");
htmlExample.set_editor_text(`
<div id="firstDiv">
  Hello!
</div>
<div id="secondDiv">
  These are dividers =
</div>
<style>
  #firstDiv {
    height: 30px;
    width: 200px;
    padding: 10px;
    background-color: #333;
  }
  #secondDiv {
    
  }
  `);
