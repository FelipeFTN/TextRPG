// Typescript Text RPG
// No Name Yet :D

import { playerClass } from './classes/player'
import { titleScreen } from './menu/main'
import { showMap } from './map/main'

let player: playerClass = new playerClass();

titleScreen();

export function startGame() {
    showMap(player);
}