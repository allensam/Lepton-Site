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
  constructor(name, mode, fontSize) {
    this.name = ace.edit(name)
    this.name.setTheme(`ace/theme/monokai`);
    this.name.getSession().setMode(`ace/mode/${mode}`);
    this.name.$blockScrolling = Infinity;

  }
  /**
  * @return [string] editor text
  */
  return_text_in_editor() {
      return this.name.getValue();
  }
  css_return_text_in_editor(htmlString) {
    var cssString = this.name.getValue();
    return htmlString + "<style>" + cssString + "</style>";
  }
  /**
  * @param input [string] the text that goes in the eidtor
  * @return set value of editor
  */
  set_editor_text(input) {
    return this.name.setValue(input);
  }

  set_editor_rw(rwinput) {
    return this.name.setReadOnly(rwinput);
  }
}

function remove_active(parent) {
  let elems = parent.querySelectorAll('.active');
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove('active');
  }
}

function setup_tabs() {
  var tabs = document.querySelectorAll('.tab');
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    tab.addEventListener('click', function(e) {
      let id = this.dataset.tabReference;
      remove_active(this.parentElement);
      let tab_section = this.parentElement.querySelector('[data-tab-id="' + id + '"]');
      tab_section.classList.add('active');
    });
  }
}

//listen for events/ window on load
window.addEventListener ?
window.addEventListener("load",setup_tabs(),false) :
window.attachEvent && window.attachEvent("onload",setup_tabs());
