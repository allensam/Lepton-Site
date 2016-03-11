import {Editor} from 'editors/editor.js'
describe("Editor", function() {
    const editor = new Editor('test-editor', 'javascript', true);

    it('sets text', function(){
        editor.text = 'function() {}';
        expect(editor.text).toBe("function()fda {}");
        console.log('yay');
    });
});
