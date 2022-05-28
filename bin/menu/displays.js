"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = exports.helpDisplay = exports.titleDisplay = exports.languageDisplay = void 0;
const main_1 = require("./main");
function languageDisplay() {
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write('\u001B[2J\u001B[0;0f');
        console.log('################################');
        console.log('#            Language          #');
        console.log('################################');
        console.log('           - English -          ');
        console.log('          - Portuguese -        ');
        console.log('                                ');
        console.log('    Copyright 2022 FelipeFTN    ');
        yield (0, main_1.languageSelector)();
    });
}
exports.languageDisplay = languageDisplay;
function titleDisplay(language) {
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write('\u001B[2J\u001B[0;0f');
        if (language == "english") {
            console.log('################################');
            console.log('#    Welcome to the Text RPG   #');
            console.log('################################');
            console.log('            - Play -            ');
            console.log('            - Help -            ');
            console.log('            - Quit -            ');
            console.log('    Copyright 2022 FelipeFTN    ');
        }
        else {
            console.log('################################');
            console.log('#      Bem-vindo ao Text RPG   #');
            console.log('################################');
            console.log('            - Jogar -           ');
            console.log('            - Ajuda -           ');
            console.log('            - Sair -            ');
            console.log('    Copyright 2022 FelipeFTN    ');
        }
        yield (0, main_1.titleScreenSelector)();
    });
}
exports.titleDisplay = titleDisplay;
function helpDisplay(language) {
    return __awaiter(this, void 0, void 0, function* () {
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
        }
        else {
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
        yield (0, main_1.titleScreenSelector)();
    });
}
exports.helpDisplay = helpDisplay;
function createCharacter(language) {
    return __awaiter(this, void 0, void 0, function* () {
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
        }
        else {
            console.log('################################');
            console.log('           - Assassino -        ');
            console.log('           - Guerreiro -        ');
            console.log('           - Arqueiro -         ');
            console.log('           - Clerigo -          ');
            console.log('           - Barbaro -          ');
            console.log('           - Ladrao -           ');
            console.log('            - Mago -            ');
        }
    });
}
exports.createCharacter = createCharacter;
