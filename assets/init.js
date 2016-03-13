ace.config.set("basePath", "../assets/ace_editor");
import {Editor} from 'editors/editor.js';
let editors = document.querySelectorAll('.tab');

(function (e, d) {
    for (let i = 0; i < e.length; i++) {
        let langs = e[i].getAttribute('data-langs');
        let id = e[i].id;
        if (langs.length > 1) {
            let names = e[i].getAttribute('data-names');
            thing(id,langs,names);
        } else {
            thing(id,langs,null);
        }
    }

    function thing(id, langs, names) {
        let string = langs.toString();
        if (string.match(/react/i)) {

        } else if (string.match(/typescript/i)) {

        } else if (string.match(/rhtml/i)) {

        } else if (string.match(/ahtml/i)) {

        } else if (string.match(/reahtml/i)) {

        } else if (string.match(/angular/i)) {

        } else {

        }
    }
})(editors, document);