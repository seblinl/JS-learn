// Adding character experience

const aurora = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} strength attributes and ${aurora.xp} experience points.`;
    }
};

console.log(aurora.describe());

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe());

// Modeling a dog

const dog = {
    name: 'Fang',
    species: 'boarhound',
    size: 75,
    bark() {
        return 'Grrr! Grrr!';
    }
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modeling a circle

const r = Number(prompt('Enter the circle radius:'));

const circle = {
    circumference() {
        return 2 * Math.PI * r;
    },
    area() {
        return Math.PI * r ** 2;
    }
};

console.log(`Its cicumference is ${circle.circumference()}.`);
console.log(`Its area is ${circle.area()}.`);

// Modeling a bank account

const account = {
    name: 'Alex',
    balance: 0,
    credit(change) {
        this.balance += change;
    },
    describe() {
        return `Owner: ${this.name}, balance ${this.balance}.`;
    }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());