import { GameLanguage } from '../utils/globals';
import { Typing } from '../utils/typing';

export function CreateCharacter(value: number): any {
    const speech: any = {
        "english": [
            "Character's name: ",
            "Choose a race: ",
            "Choose a class: "
        ],
        "portuguese": [
            "Nome do personagem: ",
            "Escolha uma raça: ",
            "escolha uma classe: "
        ]
    };

    if (GameLanguage == "english") { return speech.english[value]; }
    else { return speech.portuguese[value]; }
}

export function Introduction(): void {
    const speech: any = {
        "english": [
            "Flame... ",
            "Heat... ",
            "Blood... ",
            "Fear...",
        ],
        "portuguese": [
            "Chama... ",
            "Calor... ",
            "Sangue... ",
            "Medo...",
        ]
    };

    if (GameLanguage == "english") { Typing(speech.english, 120); }
    else { Typing(speech.portuguese, 120); }
}
export function Prologue(): void {
    const speech: any = {
        "english": [
            "",
            "",
        ],
        "portuguese": [
            "Seus olhos se abrem cheio de dor, você observa ao seu redor. Homens vestidos com mantas de cor escura. Você está preso, amarrado pelos braços em volta de um pilar de madeira negra, semelhante ao tronco de uma arvore recem queimada.",
            "Você sente o cheiro de sangue queimando à sua volta. Ao olhar pro lado, vê os homens encapusados preparando o que lhe parece ser uma ceita.",
            "Eles se comunicam em uma linguagem estranha. Falando com uma voz calma, porém muito grave. O ritual se inicia, as paredes de pedra do ambiente começam a tremer, e pequenos grãos de pedra e terra caem sobre sua cabeça.",
            "Você é levado por um dos homens para o centro daquela ceita. Mas segundos após ter suas mãos desamarradas daquele longo pilar negro, o ambiente começa a tremer novamente, dessa vez de forma continua e muito brusca, fazendo com que todos percam o equilíbrio.",
            "Os homens estranhos agora parecem aflitos, olham para os lados, um deles grita palavras desconhecidas de forma histérica. Todos ali parecem levemente assustados, e alguns já começam a sacar adagas de prata de dentro de seus mantos.",
            "Mais um estrondo e todos caem no chão. Uma imensa criatura surge. Coberta de pelos, completamente negra e de olhos vermelhos, com aproximadamente 2 metros de altura, chegava a encostar as pontudas orelhas no teto cinza de pedra. Exalou um berro ensurdecedor que parecia com o de um tigre feroz.",
            "O lugar inteiro balança e a criatura começou a multilar todos que estavam ali no recinto. Muitos homens conjuravam feitiços e mais feitiços com o objetivo de tentar conte-lo. No meio de toda a agitação você consegue encontrar um meio de escapar.",
        ]
    };

    if (GameLanguage == "english") { Typing(speech.english, 80); }
    else { Typing(speech.portuguese, 80); }
}
