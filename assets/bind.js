
export class Bind {
    constructor(ids, langs) {
        this.id = id;
        this.langs = langs;
        this.getEditorText();
    }

    getEditorText() {
        text = this.id.text;
        setInnerHTML(text);
    }

    setInnerHTML(text) {
        //TODO fix this damn thing
    }
}