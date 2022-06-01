import { GameLanguage } from '../utils/globals';
import { Typing } from '../utils/typing';

export function CreateCharacter(value: number): any {
    const speech: any = {
        "english": [
            "Character's name: ",
            "Choose a class: "
        ],
        "portuguese": [
            "Nome do personagem: ",
            "escolha uma classe: "
        ]
    };

    if (GameLanguage == "english") { return speech.english[value]; }
    else { return speech.portuguese[value]; }
}

export function Introduction(): void {
    const englishSpeech: string = "The day before your execution you are summoned by the King of Lambridge.";
    const portugueseSpeech: string = "Um dia antes de sua execução você é convocado pelo rei de Lambridge.";

    if (GameLanguage == "english") { Typing(englishSpeech); }
    else { Typing(portugueseSpeech); }
}