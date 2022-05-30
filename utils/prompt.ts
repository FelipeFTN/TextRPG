import { stdin as input, stdout as output } from 'process';
const readline = require('readline').createInterface({ input, output });

export async function Prompt(question: string = "> "): Promise<string> {
    return new Promise((resolve) => {
        readline.question(question, (answer: string) => {
            resolve(answer);
        });
    })
}