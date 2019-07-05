
const app = require('../../app/');

describe('fastTypeCheck', () => {
    describe('Method tests', () => {
        describe('getType', () => {
            test('should return the correct type', () => {
                expect(app.getType({})).toEqual('[object Object]');
            });
        });
    });
});
