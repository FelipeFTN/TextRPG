"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerClass = void 0;
class playerClass {
    constructor() {
        this.name = "";
        this.hp = 0;
        this.mp = 0;
        this.status = [];
        this.location = "start";
        this.position = "b2";
    }
    getPlayersLocation() { return this.location; }
    getPlayersPosition() { return this.position; }
    move(value) {
    }
    interact(value) {
    }
}
exports.playerClass = playerClass;
