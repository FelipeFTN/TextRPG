"use strict";
// Typescript Text RPG
// No Name Yet :D
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = void 0;
const player_1 = require("./classes/player");
const main_1 = require("./menu/main");
const main_2 = require("./map/main");
let player = new player_1.playerClass();
(0, main_1.titleScreen)();
function startGame() {
    (0, main_2.showMap)(player);
}
exports.startGame = startGame;
