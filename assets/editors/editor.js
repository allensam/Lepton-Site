//this page is to create a super class for editors
//this way we can write as miminal code as possible
//'use strict';
//import {Tabs} from tabs.js;
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
export class Editor {
  //initializes the editor
  constructor(name, mode, writable) {
    this.name = name;
    this.editor = ace.edit(name);
    this.editor.setTheme(`ace/theme/monokai`);
    this.editor.getSession().setMode(`ace/mode/${mode}`);
    this.editor.$blockScrolling = Infinity;
    this.writable = writable;
    //this.tabs = tabs;
    tabsTest(this.tabs);

  }
  get text() {
    return this.editor.getValue();
  }
  set text(v) {
    this.editor.setValue(v);
  }
  get writable() {
    return this.writable;
  }
  set writable(v) {
    this.writable = v;
  }
  tabsTest(tabs) {
    if (tabs === true) {
      setUpTabs(tabs);
    }
  }
  setUpTabs(tabs) {
    new Tabs(this.name);
  }
}