"use strict";
// Typescript Text RPG
// No Name Yet :D
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
exports.startGame = void 0;
const classes_1 = require("./classes/classes");
const displays_1 = require("./menu/displays");
const player_1 = require("./classes/player");
const main_1 = require("./menu/main");
const prompt_1 = require("./utils/prompt");
const player = new player_1.PlayerClass();
(0, main_1.titleScreen)();
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create Character
        const playerName = yield (0, prompt_1.prompt)("Character's name: ");
        player.setPlayerName(playerName.trim());
        (0, displays_1.createCharacter)();
        let playerClass = yield (0, prompt_1.prompt)("Choose a class: ");
        while (!classes_1.Classes.includes(playerClass.trim().toLowerCase())) {
            playerClass = yield (0, prompt_1.prompt)("Choose a class: ");
        }
        (0, classes_1.AssignClass)(player, playerClass);
        console.log(player.getPlayerCombatInfo());
        console.log("Development...");
        const option = yield (yield (0, prompt_1.prompt)("What would you like to do? ")).trim();
        if (["move", "go", "travel", "walk"].includes(option)) {
            player.move(option);
        }
        else if (["examine", "inspect", " interact", "look"].includes(option)) {
            player.interact(option);
        }
        else if (["quit", "exit", "leave", "left"].includes(option)) {
            process.exit(1);
        }
        else {
            yield (0, prompt_1.prompt)("What would you like to do?? ");
        }
        process.exit(1);
    });
}
exports.startGame = startGame;
