const Employee = require('../lib/Manager');

describe('Test Manager Class', () => {
    it('should create a new Manager object', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '1122');

        expect(typeof me).toBe('object')
    })

    it('can set a name via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '1122');
        expect(me.name).toEqual('Ben');
    })

    it('can set a id via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '1122');

        expect(me.id).toEqual(1);
    })

    it('can set a email via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '1122');

        expect(me.email).toEqual('ben@gmail.com');
    })

    it('can get office number via get getOfficeNumber() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '1122');

        expect(me.getOfficeNumber()).toEqual('1122');
    })

})