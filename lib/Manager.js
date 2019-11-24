class Manager {
    constructor(name, role, id, email, officeNumber) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }
    getRole() {
        return 'Manager';
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager