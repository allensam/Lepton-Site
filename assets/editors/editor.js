//this page is to create a super class for editors
//this way we can write as miminal code as possible
//'use strict';
/**
* The Editor class makes a new ace editor that can be modified
* Note: changing theme was deprieciated as it makes it slower
* and also sublime is a globally reconized theme
* @author  Sam Allen
* @param name string Sets the editor name so that id's can change styles
* @param mode string Sets the mode of the text editor Ex: Javascript
* @param fontSize string sets the editor defualt font size
* @param write boolean true allows write false read only
* @param tabs boolean true if theres tabs to the editor
* @return it returns a new ace editor
*/
import {Bind} from '../bind.js';
import {Loading as loaded} from '../loading';
export class Editor {
  //initializes the editor
  constructor(name, mode, writable = true) {
    this.name = name;
    this.writable = writable;
    this.mode = mode;
    //this.getTabs();


  }
  // move this to another file/elsewwhere
  getTabs() {
    let langs = document.getElementById(this.name)
        .getAttribute('data-tabs');
    let names = [];
    if (langs.length != 1) {
      names = document.getElementById(this.name)
          .getAttribute('data-names');
    }
  }

  init() {
    this.editor = ace.edit(this.name);
    this.editor.setTheme(`ace/theme/monokai`);
    this.editor.getSession().setMode(`ace/mode/${this.mode}`);
    this.editor.$blockScrolling = Infinity;
    new Bind(this.name, this.mode);
    loaded(this.name);
  }
  get text() {
    return this.editor.getValue();
  }
  set text(v) {
    this.editor.setValue(v);
  }
}