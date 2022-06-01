import { PlayerClass } from './player';

export function AssignClass(player: PlayerClass, playerClass: string): void {
    if (playerClass == "barbarian" || playerClass == "barbaro") { player.SetPlayerClass(new Barbarian); return; }
    if (playerClass == "assassin" || playerClass == "assassino") { player.SetPlayerClass(new Assassin); return; }
    if (playerClass == "warrior" || playerClass == "guerreiro") { player.SetPlayerClass(new Warrior); return; }
    if (playerClass == "archer" || playerClass == "arqueiro") { player.SetPlayerClass(new Archer); return; }
    if (playerClass == "cleric" || playerClass == "clerigo") { player.SetPlayerClass(new Cleric); return; }
    if (playerClass == "thief" || playerClass == "ladrao") { player.SetPlayerClass(new Thief); return; }
    if (playerClass == "mage" || playerClass == "mago") { player.SetPlayerClass(new Mage); return; }
}

export const Classes: string[] = [
    "barbarian",
    "assassin",
    "warrior",
    "archer",
    "cleric",
    "thief",
    "mage",
    "barbaro",
    "assassino",
    "guerreiro",
    "arqueiro",
    "clerigo",
    "ladrao",
    "mago"
]

export class Barbarian {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "barbarian";
        this.hp = 50;
        this.mp = 10;
        this.attack = 35;
    }
}
export class Assassin {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "assassin";
        this.hp = 50;
        this.mp = 30;
        this.attack = 40;
    }
}
export class Warrior {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "warrior";
        this.hp = 50;
        this.mp = 30;
        this.attack = 35;
    }
}
export class Archer {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "archer";
        this.hp = 50;
        this.mp = 30;
        this.attack = 35;
    }
}
export class Cleric {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "cleric";
        this.hp = 50;
        this.mp = 30;
        this.attack = 35;
    }
}
export class Thief {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "thief";
        this.hp = 50;
        this.mp = 30;
        this.attack = 35;
    }
}
export class Mage {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;

    constructor() {
        this.name = "mage";
        this.hp = 50;
        this.mp = 30;
        this.attack = 35;
    }
}