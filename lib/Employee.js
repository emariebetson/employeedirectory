class Employee {
    constructor(name, role, id, email, school) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        return this.name;
    }
    getRole() {
        return 'Employee';
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
}

module.exports = Employee