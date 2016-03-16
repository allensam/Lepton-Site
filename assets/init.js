/**
 * Loading order on tutorials *important*
 * 1. ace
 * 2. (dependencies like angular based off of tutorial load if needed or not rest always load unless on index)
 * 4. autosize.js
 * 5. this.
 * @author Sam Allen WhiteDeath820
 * @description this file handles all data and creation of classes
 * it is important that this file is fast and light
 * @param e array of editors
 * @param  d document
 * @param obj Object stores the classes
 * @precondition obj is null as classes not created
 * TODO write tests finish generatehtml/css and start init of actual classes
 */
//sets base path important for workers to work may have to set other paths as well
ace.config.set("basePath", "../assets/ace_editor");
import {Editor} from 'editors/editor.js';
import {Bind} from 'bind.js';
let editors = document.querySelectorAll('.e');
var editorObj = {};
export function initApp(e, d, obj) {
    for (let i = 0; i < e.length; i++) {
        let langs = e[i].getAttribute('data-langs');
        let el = e[i];
        if (langs.length > 1) {
            let names = e[i].getAttribute('data-names');
            handleExceptions(el,langs,names);
        } else {
            handleExceptions(el,langs,null);
        }
        generateCSS(el, langs);
    }
    /**
     *
     * @param el is the actual element of editor wrapper NOT THE ID
     * @param langs array of languages
     */
    function generateCSS(el, langs) {
        let id = el.id;
        var style = d.createElement('style');
        style.type = 'text/css';
        for (let i = 0; i < langs.length; i++) {
            style.innerHTML = `#${id}${langs[i]} { position: absolute; }`;
        }

        d.getElementsByTagName('head')[0].appendChild(style);

        d.getElementById('someElementId').className = 'cssClass';
    }

    /**
     *
     * @param el is the actual element of editor wrapper NOT THE ID
     * @param langs  array of languages
     * @param names array of file names for the tabs
     */
    function handleExceptions(el, langs, names) {
        let string = langs.toString();
        let exceptions = {};
        if (string.match(/react|rhtml|reahtml|angular|ahtml|typescript/i)) {
            let exceptionsList = ['react','rhtml','reahtml','angular','ahtml','typescript'];
            for (let i = 0; i < exceptionsList; i++) {
                let index = langs.findIndex(x => x == i);
                if (index != -1) {
                    exceptions[i] = index;
                }
            }
        }
        startGeneration(el, langs, names, exceptions);
    }

    /**
     * not sure what this is yet
     * @param el
     * @param langs
     * @param names
     * @param exceptions
     */
    function startGeneration(el, langs, names, exceptions) {
        if (langs.length === 1 && names === null && exceptions === null) {
            obj[el.id] = new Editor(el.id, langs[1]);
        }
    }

    function test() {
        return "worked";
    }

}
initApp(editors, document, editorObj);
//TODO put these in there
autosize(editors);
var evt = document.createEvent('onkeyup');
evt.initEvent('autosize:update', true, false);
editors.dispatchEvent(evt);
