"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerClass = void 0;
class PlayerClass {
    constructor() {
        this.name = "";
        this.hp = 0;
        this.mp = 0;
        this.attack = 0;
        this.class = "";
        this.status = [];
        this.location = "start";
        this.position = "b2";
    }
    getPlayerName() { return this.name; }
    getPlayerClass() { return this.class; }
    getPlayerLocation() { return this.location; }
    getPlayerPosition() { return this.position; }
    getPlayerCombatInfo() { return { "hp": this.hp, "mp": this.mp, "attack": this.attack }; }
    setPlayerName(value) { this.name = value; }
    setPlayerClass(value) {
        this.class = value.name;
        this.hp = value.hp;
        this.mp = value.mp;
        this.attack = value.attack;
    }
    move(value) { }
    interact(value) { }
}
exports.PlayerClass = PlayerClass;
