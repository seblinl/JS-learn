module.exports = class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(change) {
        this.balance += change;
    }
    describe() {
        return `Owner: ${this.name}, Balance: ${this.balance}.`;
    }
};