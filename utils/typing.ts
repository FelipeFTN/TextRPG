import { Sleep } from './sleep';

export async function Typing(value: string | string[], timer?: number): Promise<void> {
    if (typeof(value) == "string"){
        for (let i: number = 0; i < value.length; i++) {
            process.stdout.write(value.charAt(i));
            Sleep(timer ? timer : 65);
        }
    } else {
        for (let i: number = 0; i < value.length; i++) {
            for (let j: number = 0; j < value[i].length; j++) {
                process.stdout.write(value[i].charAt(j));
                Sleep(timer ? timer : 65);
            }
        }
    }
    process.stdout.write('\n');
}