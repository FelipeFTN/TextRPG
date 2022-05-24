import { title, help } from './displays';
import { prompt } from '../utils/prompt';
import { startGame } from '../main';

export const titleScreenSelector = async (): Promise<void> => {
    const option: any = await prompt().then(answer => answer.toLowerCase());

    if (option == "play") { startGame(); }
    else if (option == "help") { help(); }
    else if (option == "ok" || option == "") { titleScreen(); }
    else { process.exit(1); }
}

export function titleScreen() { title(); }