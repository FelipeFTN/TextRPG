// Typescript Text RPG
// No Name Yet :D

import { AssignClass, Classes } from './classes/classes';
import { TitleScreen } from './menu/main';
import { CharacterNameDialog, CharacterClassDialog, Introduction } from './dialogs/main';
import { CreateCharacter } from './menu/displays';
import { PlayerClass } from './classes/player';
import { Prompt } from './utils/prompt';

const player: PlayerClass = new PlayerClass();

TitleScreen();

export async function startGame(): Promise<void> {

    const playerName: string = await Prompt(CharacterNameDialog());
    player.SetPlayerName(playerName.trim());

    CreateCharacter();
    let playerClass: string = (await Prompt(CharacterClassDialog())).trim().toLowerCase();
    while (!Classes.includes(playerClass.trim().toLowerCase())) { playerClass = (await Prompt(CharacterClassDialog())).trim().toLowerCase(); }
    AssignClass(player, playerClass);

    Introduction();

    // const option: any = (await Prompt("What would you like to do? ")).trim();

    // if (["Move", "go", "travel", "walk"].includes(option)) { player.Move(option); }
    // else if (["examine", "inspect", " Interact", "look"].includes(option)) { player.Interact(option); }
    // else if (["quit", "exit", "leave", "left"].includes(option)) { process.exit(1); }
    // else { await Prompt("What would you like to do?? "); }

    process.exit(1);
}