const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(typeof me).toBe('object');
    })
})