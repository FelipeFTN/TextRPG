import { stdin as input, stdout as output } from 'process'; // npm install @types/node
import * as readline from 'readline';
import { title, help } from './displays';

export function titleScreenSelector(): void {
    const rl = readline.createInterface({ input, output });

    const answer: any = rl.question("> ", (answer) => {
        let option: string = answer.toLowerCase();
        if (option == "play") { rl.close(); }
        else if (option == "help") { rl.close(); help(); }
        else if (option == "ok") { rl.close(); titleScreen(); }
        else { process.exit(1); }
    });
}

export function titleScreen() { title(); }