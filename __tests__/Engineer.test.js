const Employee = require('../lib/Engineer');

describe('Test Engineer Class', () => {
    it('should create a new engineer object', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '3enhobson');

        expect(typeof me).toBe('object')
    })

    it('can set a name via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '3enhobson');
        expect(me.name).toEqual('Ben');
    })

    it('can set a id via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '3enhobson');

        expect(me.id).toEqual(1);
    })

    it('can set a email via constuctor', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '3enhobson');

        expect(me.email).toEqual('ben@gmail.com');
    })

    it('can get github username via getGit() method', () => {
        const me = new Employee(1, 'ben@gmail.com', 'Ben', '3enhobson');

        expect(me.getGitHub()).toEqual('3enhobson');
    })

})