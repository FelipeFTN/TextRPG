// Typescript Text RPG
// No Name Yet :D

import { AssignClass, Classes } from './classes/classes';
import { AssignRace, Races } from './classes/races';
import { PlayerClass } from './classes/player';
import * as Displays from './menu/displays';
import { TitleScreen } from './menu/main';
import * as Dialogs from './dialogs/main';
import { Prompt } from './utils/prompt';

const player: PlayerClass = new PlayerClass();

export async function StartGame(): Promise<void> {
    await TitleScreen();

    const playerName: string = await Prompt(Dialogs.CreateCharacter(0));
    player.SetPlayerName(playerName.trim());

    Displays.CreateCharacterRaces();
    let playerRace: string = (await Prompt(Dialogs.CreateCharacter(1)));
    while (!Races.includes(playerRace.trim().toLowerCase())) { playerRace = (await Prompt(Dialogs.CreateCharacter(1))); }
    AssignRace(player, playerRace);

    Displays.CreateCharacterClasses();
    let playerClass: string = (await Prompt(Dialogs.CreateCharacter(2)));
    while (!Classes.includes(playerClass.trim().toLowerCase())) { playerClass = (await Prompt(Dialogs.CreateCharacter(1))); }
    AssignClass(player, playerClass);

    process.stdout.write('\u001B[2J\u001B[0;0f');
    Dialogs.Introduction();

    // const option: any = (await Prompt("What would you like to do? ")).trim();

    // if (["Move", "go", "travel", "walk"].includes(option)) { player.Move(option); }
    // else if (["examine", "inspect", " Interact", "look"].includes(option)) { player.Interact(option); }
    // else if (["quit", "exit", "leave", "left"].includes(option)) { process.exit(1); }
    // else { await Prompt("What would you like to do?? "); }

    process.exit(1);
}

StartGame();