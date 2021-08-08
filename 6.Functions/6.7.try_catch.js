console.log('============ Try Catch ============');

const Person = {
    firstName: 'Jahid',
    lastName: 'Hossain',
    get FullName() {
        return `${Person.firstName} ${Person.lastName}`;
    },
    set FullName(value) {
        if (typeof value !== 'string')
            throw new Error('Full Name is not valid');

        let Name = value.split(' ');

        if (Name.length !== 2)
            throw new Error('Plz..Enter valid first and last name');
        
        this.firstName = Name[0];
        this.lastName = Name[1];
    }
};

try {
    // Person.FullName = true;
    // Person.FullName = '';
    Person.FullName = 'John Smith';
}
catch (e) {
    alert(e);
}

console.log(Person.FullName);