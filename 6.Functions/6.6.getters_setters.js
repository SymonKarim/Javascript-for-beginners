console.log('============ Getters and Setters ============');

const person = {
    firstName: 'Jahid',
    lastName: 'Hossain',
    get fullName() {
        // return this.firstName + ' ' + this.lastName;
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        let Name = value.split(' ');
        this.firstName = Name[0];
        this.lastName = Name[1];
    }
};

person.fullName = "MD JAHID";
console.log(person.fullName);

// ============================================================

const Teacher = {
    firstName: 'X',
    lastName: 'Y',
    salary: 25000,

    get TeacherInfo() {
        return `First Name : ${Teacher.firstName} Last Name : ${Teacher.lastName} Salary : ${Teacher.salary} `;
    },
    
    set TeacherInfo(value) {
        let info = value.split(' ');
        this.firstName = info[0];
        this.lastName = info[1];
        this.salary = info[2];
    }
};
/**
 * Teacher.firstName = "John";
 * Teacher.lastName = "Smith";
 * Teacher.salry = 30000;
 */

Teacher.TeacherInfo = "John Smith 35000";
console.log(Teacher.TeacherInfo);