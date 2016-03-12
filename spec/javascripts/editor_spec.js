fixture.load('editor.html.erb', append = false);
//TODO finish writting tests after tabs class is finished
import {Editor} from 'editors/editor.js'
describe("Editor", function() {
    const editor = new Editor('test-editor', 'javascript', true);

    it('sets text', function(){
        editor.text = 'function() {}';
        expect(editor.text).toBe("function() {}");
        console.log('yay');
    });
});
