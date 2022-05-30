import { GameLanguage } from '../utils/globals';

export function CharacterNameDialog(): string {
    const englishSpeech: string = "Character's name: ";
    const portugueseSpeech: string = "Nome do personagem: ";

    if (GameLanguage == "english") { return englishSpeech; }
    else { return portugueseSpeech; }
}
export function CharacterClassDialog(): string {
    const englishSpeech: string = "Choose a class: ";
    const portugueseSpeech: string = "escolha uma classe: ";

    if (GameLanguage == "english") { return englishSpeech; }
    else { return portugueseSpeech; }
}