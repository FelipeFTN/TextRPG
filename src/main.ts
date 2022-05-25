// Typescript Text RPG
// No Name Yet :D

import { AssignClass, Classes, Barbarian, Assassin, Warrior, Archer, Cleric, Thief, Mage } from './classes/classes';
import { createCharacter } from './menu/displays';
import { PlayerClass } from './classes/player';
import { titleScreen } from './menu/main';
import { prompt } from './utils/prompt';
import { showMap } from './map/main';

const player: PlayerClass = new PlayerClass();

titleScreen();

export async function startGame(): Promise<void> {

    // Create Character

    const playerName: string = await prompt("Character's name: ");
    player.setPlayerName(playerName.trim());

    createCharacter();
    let playerClass: string = await (await prompt("Choose a class: ")).trim().toLowerCase();
    while (!Classes.includes(playerClass.trim().toLowerCase())) { playerClass = await (await prompt("Choose a class: ")).trim().toLowerCase(); }
    AssignClass(player, playerClass);

    console.log(`Hello ${player.getPlayerName()}, the ${player.getPlayerClass()}`);

    // const option: any = await (await prompt("What would you like to do? ")).trim();

    // if (["move", "go", "travel", "walk"].includes(option)) { player.move(option); }
    // else if (["examine", "inspect", " interact", "look"].includes(option)) { player.interact(option); }
    // else if (["quit", "exit", "leave", "left"].includes(option)) { process.exit(1); }
    // else { await prompt("What would you like to do?? "); }

    process.exit(1);
}