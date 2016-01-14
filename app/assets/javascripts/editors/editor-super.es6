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

function remove_active(parent) {
  var elems = parent.querySelectorAll('.active');
  for (var i = 0; i < elems.length; i++) {
    elems[i].classList.remove('active');
  }
}

function setup_tabs() {
  var tabs = document.querySelectorAll('.tab');
  console.log(tabs);
  for (var i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    tab.addEventListener('click', function(e) {
      var id = this.dataset.tabReference;
      remove_active(this.parentElement);
      var tab_section = this.parentElement.querySelector('[data-tab-id="' + id + '"]');
      tab_section.classList.add('active');
    });
  }
}

window.addEventListener ?
window.addEventListener("load",setup_tabs(),false) :
window.attachEvent && window.attachEvent("onload",setup_tabs());
