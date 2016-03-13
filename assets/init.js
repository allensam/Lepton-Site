ace.config.set("basePath", "../assets/ace_editor");
import {Editor} from 'editors/editor.js';
let editors = document.querySelectorAll('.e');
var editorObj = {}
(function (e, d) {
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

    function generateCSS(el, langs) {
        let id = el.id;
        var style = document.createElement('style');
        style.type = 'text/css';
        for (let i = 0; i < langs.length; i++) {
            style.innerHTML = `##{id}#{langs[i]} { position: absolute; }`;
        }

        document.getElementsByTagName('head')[0].appendChild(style);

        document.getElementById('someElementId').className = 'cssClass';
    }

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

    function startGeneration(el, langs, names, exceptions) {
        if (langs.length === 1 && names === null && exceptions === null) {
            editorObj[el.id] = new Editor(el.id, langs[1])
        }
    }
})(editors, document, editorObj);