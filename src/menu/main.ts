import { stdin as input, stdout as output } from 'process'; // npm install @types/node
import { title, help } from './displays';
import { startGame } from '../main'
import * as readline from 'readline';

export function titleScreenSelector(): void {
    const rl = readline.createInterface({ input, output });

    const answer: any = rl.question("> ", (answer) => {
        let option: string = answer.toLowerCase();
        if (option == "play") { rl.close(); startGame(); }
        else if (option == "help") { rl.close(); help(); }
        else if (option == "ok" || option == "") { rl.close(); titleScreen(); }
        else { process.exit(1); }
    });
}

export function titleScreen() { title(); }