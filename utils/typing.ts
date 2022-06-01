import { Sleep } from './sleep';

export async function Typing(value: string): Promise<void> {
    for (let i: number = 0; i < value.length; i++) {
        process.stdout.write(value.charAt(i));
        Sleep(65);
    }
    process.stdout.write('\n');
}