import { titleScreenSelector } from "./main"

export async function help(): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f')
    console.log('                                 ')    
    console.log('#################################')    
    console.log('#    Welcome to the Text RPG    #')    
    console.log('#################################')    
    console.log('Use up, down, left, right to move')    
    console.log('  Type your commands to do them  ')    
    console.log(' Use "look" to inspect something ')    
    console.log('     Good luck and have fun!     ')    
    console.log('                                 ')    
    console.log('             - Ok -              ')    
    console.log('                                 ')    
    console.log('    Copyright 2022 FelipeFTN     ')    
    await titleScreenSelector();

}
export async function title(): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f')
    console.log('                                ')    
    console.log('################################')    
    console.log('#    Welcome to the Text RPG   #')    
    console.log('################################')    
    console.log('            - Play -            ')    
    console.log('            - Help -            ')    
    console.log('            - Quit -            ')    
    console.log('    Copyright 2022 FelipeFTN    ')    
    await titleScreenSelector();
}