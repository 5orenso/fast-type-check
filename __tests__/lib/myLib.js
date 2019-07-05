
const MyLib = require('../../lib/myLib');

describe('myLib', () => {
    describe('Method tests', () => {
        describe('say', () => {
            const myLib = new MyLib('foo');
            test('should return the correct string', () => {
                expect(myLib.say()).toEqual('foo');
            });
        });
        describe('run', () => {
            const myLib = new MyLib();
            test('should return the correct string', () => {
                expect(myLib.run()).toEqual('Yo!');
            });
        });
    });
});
