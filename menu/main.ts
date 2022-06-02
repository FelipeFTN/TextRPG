import { TitleDisplay, LanguageDisplay, HelpDisplay } from './displays';
import { SetGameLanguage } from '../utils/globals';
import { Prompt } from '../utils/prompt';

export async function TitleSelector(): Promise<void> {
    TitleDisplay();

    const option: any = (await Prompt()).trim().toLowerCase();

    if (option == "play" || option == "jogar") { return; }
    else if (option == "help" || option == "ajuda") { await HelpSelector(); }
    else { process.exit(1); }
}
export async function HelpSelector(): Promise<void> {
    HelpDisplay();

    const option: any = (await Prompt()).trim().toLowerCase();

    if (option || option == "") { TitleSelector(); }
    else { process.exit(1); }
}

export async function LanguageSelector(): Promise<void> {
    LanguageDisplay();
    const option: any = (await Prompt()).trim().toLowerCase();

    if (["english", "en", "ingles", "inglês"].includes(option)) { SetGameLanguage("english"); }
    else if (["portuguese", "portugues", "pt", "português"].includes(option)) { SetGameLanguage("portuguese"); }
    else { process.exit(1); }
}

export async function TitleScreen(): Promise<void> { 
    await LanguageSelector();
    await TitleSelector();
}