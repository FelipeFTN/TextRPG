import { PlayerClass } from './player';

export function AssignRace(player: PlayerClass, playerRace: string): void { 
    if (playerRace == "human" || playerRace == "humano") { player.SetPlayerRace(playerRace); return; }
    if (playerRace == "orc" || playerRace == "orc") { player.SetPlayerRace(playerRace); return; }
    if (playerRace == "elve" || playerRace == "elfo") { player.SetPlayerRace(playerRace); return; }
    if (playerRace == "undead" || playerRace == "morto-vivo") { player.SetPlayerRace(playerRace); return; }
}
export const Races: string[] = [
    "human",
    "orcs",
    "elves",
    "undead",
    "humano",
    "orcs",
    "elfos",
    "morto-vivo",
    "morto vivo",
    "morto"
]

export class Human {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number

    constructor() {
        this.name = "human";
        this.hp = 100;
        this.mp = 50;
        this.attack = 100;
    }
}
export class Orc {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number

    constructor() {
        this.name = "orc";
        this.hp = 200;
        this.mp = 10;
        this.attack = 150;
    }
}
export class Elve {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number

    constructor() {
        this.name = "elve";
        this.hp = 80;
        this.mp = 150;
        this.attack = 100;
    }
}
export class Undead {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number

    constructor() {
        this.name = "undead";
        this.hp = 500;
        this.mp = 200;
        this.attack = 80;
    }
}