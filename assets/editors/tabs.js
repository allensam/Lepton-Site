export class Tabs {
  constructor(editor, name) {
    this.name = name;
  }

}
//TODO convert functions to class
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
function wrap(top, selector, bottom){
  var matches = document.querySelectorAll(selector);
  for (var i = 0; i < matches.length; i++){
    var modified = top + matches[i].outerHTML + bottom;
    matches[i].outerHTML = modified;
  }
}

wrap("<div class='wrapper'>", ".getWrapped", "</div>");
//listen for events/ window on load
// window.addEventListener ?
// window.addEventListener("load",setup_tabs(),false) :
// window.attachEvent && window.attachEvent("onload",setup_tabs());
