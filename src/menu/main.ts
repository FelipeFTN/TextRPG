import { titleDisplay, languageDisplay, helpDisplay } from './displays';
import { prompt } from '../utils/prompt';
import { startGame } from '../main';

export let gameLanguage: string = "";

export async function titleScreenSelector(): Promise<void> {
    const option: any = await prompt();

    if (option == "play") { startGame(); }
    else if (option == "help") { helpDisplay(); }
    else if (option == "ok" || option == "") { titleScreen(); }
    else { process.exit(1); }
}

export async function languageSelector(): Promise<void> {
    const option: any = (await prompt()).trim().toLowerCase();

    if (["english", "en", "ingles", "inglês"].includes(option)) { gameLanguage = "english"; }
    else if (["portuguese", "portugues", "pt", "português"].includes(option)) { gameLanguage = "portuguese"; }
    else { process.exit(1); }
}

export async function titleScreen(): Promise<void> { 
    await languageDisplay();
    await titleDisplay();
}