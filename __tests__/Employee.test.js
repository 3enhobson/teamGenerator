const Employee = require('../lib/Employee');

describe('Test Employee Class', () => {
    it('should create a new employee object', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(typeof me).toBe('object');
    })

    it('can set a name via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.name).toEqual('Ben');
    })
    it('can set a id via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.id).toEqual(1);
    })
    it('can set a email via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.email).toEqual('ben@gmail.com');
    })

    it('can get email through getEmail() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.getEmail()).toEqual('ben@gmail.com');
    })

    it('can get name through getName() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.getName()).toEqual('Ben');
    })   

    it('can get id through getId() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.getId()).toEqual(1);
    })

    it('can get role through getRole() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben');

        expect(me.getRole() ).toEqual('Employee');
    })
})