import { titleScreenSelector, languageSelector } from "./main"

export async function languageDisplay(): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    console.log('################################');
    console.log('#            Language          #');
    console.log('################################');
    console.log('           - English -          ');
    console.log('          - Portuguese -        ');
    console.log('                                ');
    console.log('    Copyright 2022 FelipeFTN    ');
    await languageSelector();
}
export async function titleDisplay(language: string): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    if (language == "english") {
        console.log('################################');
        console.log('#    Welcome to the Text RPG   #');
        console.log('################################');
        console.log('            - Play -            ');
        console.log('            - Help -            ');
        console.log('            - Quit -            ');
        console.log('    Copyright 2022 FelipeFTN    ');
    } else {
        console.log('################################');
        console.log('#      Bem-vindo ao Text RPG   #');
        console.log('################################');
        console.log('            - Jogar -           ');
        console.log('            - Ajuda -           ');
        console.log('            - Sair -            ');
        console.log('    Copyright 2022 FelipeFTN    ');
    }
    await titleScreenSelector();
}
export async function helpDisplay(language: string): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f');

    if (language == "english") {
        console.log('#################################');
        console.log('#    Welcome to the Text RPG    #');   
        console.log('#################################');
        console.log('Use up, down, left, right to move');
        console.log('  Type your commands to do them  ');
        console.log(' Use "look" to inspect something ');
        console.log('     Good luck and have fun!     ');
        console.log('                                 ');
        console.log('             - Ok -              ');
        console.log('                                 ');
        console.log('    Copyright 2022 FelipeFTN     ');
    } else {
        console.log('#################################');
        console.log('#     Bem-vindo ao Text RPG     #');   
        console.log('#################################');
        console.log('Use cima, baixo, esqueda, direita');
        console.log('           para se mover.        ');
        console.log('  Digite os comandos para jogar  ');
        console.log('Use "olhar" para inspecionar algo');
        console.log('     Boa sorte e se divirta!     ');
        console.log('                                 ');
        console.log('             - Ok -              ');
        console.log('                                 ');
        console.log('    Copyright 2022 FelipeFTN     ');
    }
    await titleScreenSelector();
}
export async function createCharacter(language: string): Promise<void> {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    if (language == "english") {
        console.log('################################');
        console.log('          - Barbarian -         ');
        console.log('           - Assassin -         ');
        console.log('           - Warrior -          ');
        console.log('           - Archer -           ');
        console.log('           - Cleric -           ');
        console.log('           - Thief -            ');
        console.log('            - Mage -            ');
    } else {
        console.log('################################');
        console.log('           - Assassino -        ');
        console.log('           - Guerreiro -        ');
        console.log('           - Arqueiro -         ');
        console.log('           - Clerigo -          ');
        console.log('           - Barbaro -          ');
        console.log('           - Ladrao -           ');
        console.log('            - Mago -            ');
    }
}