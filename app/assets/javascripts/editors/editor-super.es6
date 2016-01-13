//this page is to create a super class for editors
//this way we can write as miminal code as possible
'use strict';
//sets the path to the editor
ace.config.set("basePath", "ace_editor");
/**
* The Editor class makes a new ace editor that can be modified
* Note: changing theme was deprieciated as it makes it slower
* and also sublime is a globally reconized theme
* @author  Sam Allen
* @param name [string] Sets the editor name so that id's can change styles
* @param mode [string] Sets the mode of the text editor Ex: Javascript
* @return it returns a new ace editor
*/

class Editor {
  //initializes the editor
  constructor(name, mode) {
    this.name = ace.edit(name)
    this.name.setTheme(`ace/theme/monokai`);
    this.name.getSession().setMode(`ace/mode/${mode}`);
  }
  /**
  * @return [string] editor text
  */
  return_text_in_editor() {
      return this.name.getValue();
  }
  /**
  * @param input [string] the text that goes in the eidtor
  * @return set value of editor
  */
  set_editor_text(input) {
    return this.name.setValue(input);
  }

}

/**
* This is to make creation of editors with multpile tags easier
* @author Sam Allen
* @param baseName [string] is the base of name to describe what this editor is fo
* @param nameList [object, strings] list editor name followed by editor mode
* @return Editors easily tabable
* @see class Editor
*/
