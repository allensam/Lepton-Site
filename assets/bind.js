fixture.load('editor.html', append = false);
export class Bind {
    constructor(id, lang) {
        this.id = id;
        this.lang = lang;
        this.getEditorText();
    }

    updateBind() {
        this.getEditorText();
        this.setInnerHTML();
    }

    getEditorText() {
        let text = this.id.text;
        let child =
    }

    setInnerHTML(text) {
        //TODO fix this damn thing
    }
}