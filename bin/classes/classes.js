"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = exports.Thief = exports.Cleric = exports.Archer = exports.Warrior = exports.Assassin = exports.Barbarian = exports.Classes = void 0;
exports.Classes = [
    "barbarian",
    "assassin",
    "warrior",
    "archer",
    "cleric",
    "thief",
    "mage"
];
class Barbarian {
    constructor() {
        this.name = "barbarian";
        this.hp = 150;
        this.mp = 10;
        this.attack = 135;
    }
}
exports.Barbarian = Barbarian;
class Assassin {
    constructor() {
        this.name = "assassin";
        this.hp = 50;
        this.mp = 30;
        this.attack = 140;
    }
}
exports.Assassin = Assassin;
class Warrior {
    constructor() {
        this.name = "warrior";
        this.hp = 50;
        this.mp = 30;
        this.attack = 135;
    }
}
exports.Warrior = Warrior;
class Archer {
    constructor() {
        this.name = "archer";
        this.hp = 50;
        this.mp = 30;
        this.attack = 135;
    }
}
exports.Archer = Archer;
class Cleric {
    constructor() {
        this.name = "cleric";
        this.hp = 50;
        this.mp = 30;
        this.attack = 135;
    }
}
exports.Cleric = Cleric;
class Thief {
    constructor() {
        this.name = "thief";
        this.hp = 50;
        this.mp = 30;
        this.attack = 135;
    }
}
exports.Thief = Thief;
class Mage {
    constructor() {
        this.name = "mage";
        this.hp = 50;
        this.mp = 30;
        this.attack = 135;
    }
}
exports.Mage = Mage;
