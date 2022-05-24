import { stdin as input, stdout as output } from 'process'; // npm install @types/node
import * as readline from 'readline';

export const prompt = async (question: string = ""): Promise<string> => {
    console.log(question)

    const rl = readline.createInterface({ input, output });

    // const answer: any = rl.question("> ", async (answer) => {
    //     const option: string = answer.toLowerCase();
    //     console.log("option: ", option);
    //     return option;
    // });

    // return answer;

    return new Promise<string>(resolve => rl.question("> ", resolve)).finally(() => rl.close());

}