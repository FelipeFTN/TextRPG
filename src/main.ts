// Typescript Text RPG
// No Name Yet :D

import { AssignClass, Classes } from './classes/classes';
import { titleScreen, gameLanguage } from './menu/main';
import { CharacterNameDialog, CharacterClassDialog } from './dialogs/main';
import { createCharacter } from './menu/displays';
import { PlayerClass } from './classes/player';
import { prompt } from './utils/prompt';

const player: PlayerClass = new PlayerClass();

titleScreen();

export async function startGame(): Promise<void> {

    const playerName: string = await prompt(CharacterNameDialog());
    player.setPlayerName(playerName.trim());

    createCharacter(gameLanguage);
    let playerClass: string = (await prompt(CharacterClassDialog())).trim().toLowerCase();
    while (!Classes.includes(playerClass.trim().toLowerCase())) { playerClass = (await prompt(CharacterClassDialog())).trim().toLowerCase(); }
    AssignClass(player, playerClass);

    console.log(`Hello ${player.getPlayerName()}, the ${player.getPlayerClass()}`);

    // const option: any = (await prompt("What would you like to do? ")).trim();

    // if (["move", "go", "travel", "walk"].includes(option)) { player.move(option); }
    // else if (["examine", "inspect", " interact", "look"].includes(option)) { player.interact(option); }
    // else if (["quit", "exit", "leave", "left"].includes(option)) { process.exit(1); }
    // else { await prompt("What would you like to do?? "); }

    process.exit(1);
}