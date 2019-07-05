
const app = require('../../app/');

describe('app', () => {
    describe('Method tests', () => {
        describe('run', () => {
            test('should return the correct string', () => {
                expect(app.run()).toEqual('Yo!');
            });
        });
    });
});
