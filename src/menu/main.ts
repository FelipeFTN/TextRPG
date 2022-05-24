import { title, help } from './displays';
import { prompt } from '../utils/prompt';
import { startGame } from '../main';

export async function titleScreenSelector() {
    const option: any = await prompt();

    if (option == "play") { startGame(); }
    else if (option == "help") { help(); }
    else if (option == "ok" || option == "") { titleScreen(); }
    else { process.exit(1); }
}

export function titleScreen() { title(); }