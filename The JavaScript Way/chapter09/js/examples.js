// Dogs
/*
class Dog {
    constructor (name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    describe() {
        return `${this.name} is a ${this.species} dog measuring ${this.size}.`;
    }
    bark() {
        if (this.size > 60) {
            return `Look, a cat! ${this.name} barks: Grrr! Grrr!.`;
        } else {
            return `Look, a cat! ${this.name} barks: Woof! Woof!`;
        }
    }
}

const fang = new Dog('Fang', 'boarhound', 75);
console.log(fang.describe());
console.log(fang.bark());

const snowy = new Dog('Snowy', 'terrier', 22);
console.log(snowy.describe());
console.log(snowy.bark());
*/

// Character inventory
/*
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
        this.inventory = {gold: 10, key: 1};
    }
    describe() {
        return `${this.name} has ${this.health} hp, ${this.strength} strength and ${this.xp} xp, ${this.inventory.gold} gold and ${this.inventory.key} key(s).`;
    }
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and casues ${damage} damage.`);
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} hp left.`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(`${this.name} has defeated ${target.name} and gained ${bonusXP} xp, ${target.inventory.gold} gold and ${target.inventory.key} key(s).`);
                this.xp += bonusXP;
                this.inventory.gold += target.inventory.gold;
                this.inventory.key += target.inventory.key;
            }
        } else {
            console.log(`${this.name} can't attack (they have been eliminated).`);
        }
    }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

console.log('Your adventure starts here.');
console.log(aurora.describe());
console.log(glacius.describe());

const beastie = new Character('Belzebub', 50, 20);
console.log(`The vile fiend ${beastie.name} has appeared.`);

beastie.attack(aurora);
beastie.attack(glacius);
aurora.attack(beastie);
glacius.attack(beastie);

console.log(aurora.describe());
console.log(glacius.describe());
*/

// Account list

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
    credit(change) {
        this.balance += change;
    }
    describe() {
        return `Owner: ${this.name}, balance: ${this.balance}`;
    }
}

const sean = new Account('Sean');
const brad = new Account('Brad');
const georges = new Account('Georges');

const accounts = [];
accounts.push(sean, brad, georges);

for (const account of accounts) {
    account.credit(1000);
    console.log(account.describe());
}