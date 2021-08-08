console.log('============ Arrow Function ============');

const persons = [
    {id: 1 , name: 'Jahid',DOB: '11-05-1998'},
    {id: 2 , name: 'John',DOB: '05-08-1988'},
    {id: 3 , name: 'Smith',DOB: '24-03-2008'},
];

let val = persons.find(person => person.id === 2);
console.log(val);

for (const key of persons) {
    val = persons.find(person => person.id === key.id);
    console.log(val);
}

for (const key of persons) {
    val = persons.find(person => person.id === key.id);
    console.log('id : ' , val.id);
}

for (const key of persons) {
    val = persons.find(person => person.name === key.name);
    console.log('name : ' , val.name);
}

for (const key of persons) {
    val = persons.find(person => person.DOB === key.DOB);
    console.log('DOB : ' , val.DOB);
}