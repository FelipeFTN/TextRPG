import { GameLanguage } from '../utils/globals';
import { Typing } from '../utils/typing';

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
export function Introduction(): void {
    const englishSpeech: string = "The day before your execution you are summoned by the King of Lambridge.";
    const portugueseSpeech: string = "Um dia antes de sua execução você é convocado pelo rei de Lambridge.";


    if (GameLanguage == "english") { Typing(englishSpeech); }
    else { Typing(portugueseSpeech); }
}