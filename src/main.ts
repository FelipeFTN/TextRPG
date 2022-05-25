// Typescript Text RPG
// No Name Yet :D

import { playerClass } from './classes/player';
import { titleScreen } from './menu/main';
import { prompt } from './utils/prompt';
import { showMap } from './map/main';

let player: playerClass = new playerClass();

titleScreen();

export async function startGame(): Promise<void> {
    console.log("Development...")

    const option: any = await prompt("What would you like to do?");

    if (["move", "go", "travel", "walk"].includes(option)) { player.move(option); }
    else if (["examine", "inspect", " interact", "look"].includes(option)) { player.interact(option); }
    else if (["quit", "exit", "leave", "left"].includes(option)) { process.exit(1); }
    else { await prompt("What would you like to do??"); }

    process.exit(1);
}