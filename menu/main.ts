import { TitleDisplay, LanguageDisplay, HelpDisplay } from './displays';
import { SetGameLanguage } from '../utils/globals';
import { Prompt } from '../utils/prompt';
import { startGame } from '../main';

export async function TitleScreenSelector(): Promise<void> {
    const option: any = await Prompt();

    if (option == "play" || option == "jogar") { startGame(); }
    else if (option == "help" || option == "ajuda") { HelpDisplay(); }
    else if (option == "ok" || option == "") { TitleDisplay(); }
    else { process.exit(1); }
}

export async function LanguageSelector(): Promise<void> {
    const option: any = (await Prompt()).trim().toLowerCase();

    if (["english", "en", "ingles", "inglês"].includes(option)) { SetGameLanguage("english"); }
    else if (["portuguese", "portugues", "pt", "português"].includes(option)) { SetGameLanguage("portuguese"); }
    else { process.exit(1); }
}

export async function TitleScreen(): Promise<void> { 
    await LanguageDisplay();
    await TitleDisplay();
}