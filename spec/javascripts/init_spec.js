
import {init} from 'init.js';
describe("main initiation/runner", function() {
    let editors = document.querySelectorAll('.e');
    let editorObj = {};
    const init = initApp(editors,document,editorObj);
    it('should run code', function() {
        expect(init.test()).toBe("worked");
        expect(init.d).toBe(document);
        expect(typeof init.obj).toBe("object");
        expect(typeof init.e).toBe("array");
        expect(init.e).toBe(`<div class="e" id="test-editor" data-langs="['javascript','html']" data-tabs="['test.js', 'index.html']"></div>`);

    });
});
