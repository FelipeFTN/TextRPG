"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterClassDialog = exports.CharacterNameDialog = void 0;
const main_1 = require("../menu/main");
function CharacterNameDialog() {
    const englishSpeech = "Character's name: ";
    const portugueseSpeech = "Nome do personagem: ";
    if (main_1.gameLanguage == "english") {
        return englishSpeech;
    }
    else {
        return portugueseSpeech;
    }
}
exports.CharacterNameDialog = CharacterNameDialog;
function CharacterClassDialog() {
    const englishSpeech = "Choose a class: ";
    const portugueseSpeech = "escolha uma classe: ";
    if (main_1.gameLanguage == "english") {
        return englishSpeech;
    }
    else {
        return portugueseSpeech;
    }
}
exports.CharacterClassDialog = CharacterClassDialog;
