console.log("ugh");
import {Greeter} from 'greeter.js';
console.log("made it here");
describe("Greeter", function() {
    const greeter = new Greeter();

    it('greets', function(){
        expect(greeter.greet('Someone')).toBe("Hello Someone!")
        console.log(greeter.greet('sam'));
    });
});
