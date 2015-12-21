//this page is to create a super class for editors
//this way we can write as miminal code as possible
'use strict';
//sets the path to the editor
ace.config.set("basePath", "ace_editor");
/**
* The Editor class makes a new ace editor that can be modified
*
* @author  Sam Allen
* @param name [string] Sets the editor name so that id's can change styles
* @param theme [string] Sets the theme of the editor
* @param mode [string] Sets the mode of the text editor Ex: Javascript
* @return it returns a new ace editor
*/
class Editor {
  constructor(name, theme, mode) {
    this.editor = ace.edit(name)
    this.editor.setTheme(`ace/theme/${theme}`);
    this.editor.getSession().setMode(`ace/mode/${mode}`);
  }
}
