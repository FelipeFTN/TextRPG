// Typescript Text RPG
// No Name Yet :D

import { playerClass } from './classes/player';
import { titleScreen } from './menu/main';
import { prompt } from './utils/prompt';
import { showMap } from './map/main';

let player: playerClass = new playerClass();

titleScreen();

export const startGame = async (): Promise<void> => {
    showMap(player);

    const option: any = await prompt("What would you like to do?")
    .then(answer => answer.toLowerCase());

    if (["move", "go", "travel", "walk"].includes(option)) { player.move(option); }
    else if (["examine", "inspect", " interact", "look"].includes(option)) { player.interact(option); }
    else if (["quit", "exit"].includes(option)) { process.exit(1); }
    else { prompt("What would you like to do??"); }
}
