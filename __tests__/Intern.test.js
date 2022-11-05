const Employee = require('../lib/Intern');

describe('Test Intern Class', () => {
    it('should create a new intern object', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', 'UCLA');

        expect(typeof me).toBe('object')
    })

    it('can set a name via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', 'UCLA');
        expect(me.name).toEqual('Ben');
    })

    it('can set a id via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', 'UCLA');

        expect(me.id).toEqual(1);
    })

    it('can set a email via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', 'UCLA');

        expect(me.email).toEqual('ben@gmail.com');
    })

    it('can get interns school via getSchool() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', 'UCLA');

        expect(me.getSchool()).toEqual('UCLA');
    })

})