'use strict';
var htmlExample = new Editor("htmlExample", "html");
htmlExample.set_editor_text(`<div id="firstDiv">
  Hello!
</div>
<div id="secondDiv">
  These are dividers they put divisions between
  blocks of tags or text
</div>
<style>
  #firstDiv {
      height: 30px;
      width: 200px;
      padding: 10px;
      background-color: #333;
      color: white;
  }
  #secondDiv {
      color: red;
  }
</style>
  `);

var bigLoad = new Editor("bigLoad", "html");

bigLoad.set_editor_text(`<div>
  <input type="text" />
  <!-- Comments -->
  <p>
    This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <h1>Heading</h1>
  <h2>Smaller</h2>
  <h3>What do you know</h3>
  </h4>It keeps getting smaller</h4>
  <h5>So smol</h5>
  <h6>Finally the last one!</h6>
  <!--
    multi line comments!
    you learn more about how to style these in css
    don't worry if you're confused
  -->
  <div class="nav-bar">
    <ul>
      <li>First link</li>
      <li>Second Link</li>
      <li>More!!!</li>
    </ul>
  </div>
  <!-- learn how to make buttons do stuff in javascript -->
  <button> DON'T CLICK THIS... it doesn't do anything</button>


</div>
`)
