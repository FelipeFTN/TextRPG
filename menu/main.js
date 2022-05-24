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
exports.titleScreen = exports.titleScreenSelector = void 0;
const displays_1 = require("./displays");
const prompt_1 = require("../utils/prompt");
const main_1 = require("../main");
const titleScreenSelector = () => __awaiter(void 0, void 0, void 0, function* () {
    const option = yield (0, prompt_1.prompt)().then(answer => answer.toLowerCase());
    if (option == "play") {
        (0, main_1.startGame)();
    }
    else if (option == "help") {
        (0, displays_1.help)();
    }
    else if (option == "ok" || option == "") {
        titleScreen();
    }
    else {
        process.exit(1);
    }
});
exports.titleScreenSelector = titleScreenSelector;
function titleScreen() { (0, displays_1.title)(); }
exports.titleScreen = titleScreen;
