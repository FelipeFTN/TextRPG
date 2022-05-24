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
exports.title = exports.help = void 0;
const main_1 = require("./main");
function help() {
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write('\u001B[2J\u001B[0;0f');
        console.log('                                 ');
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
        yield (0, main_1.titleScreenSelector)();
    });
}
exports.help = help;
function title() {
    return __awaiter(this, void 0, void 0, function* () {
        process.stdout.write('\u001B[2J\u001B[0;0f');
        console.log('                                ');
        console.log('################################');
        console.log('#    Welcome to the Text RPG   #');
        console.log('################################');
        console.log('            - Play -            ');
        console.log('            - Help -            ');
        console.log('            - Quit -            ');
        console.log('    Copyright 2022 FelipeFTN    ');
        yield (0, main_1.titleScreenSelector)();
    });
}
exports.title = title;