"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMap = void 0;
const map_1 = __importDefault(require("./map"));
function showMap(player) {
    console.log('\n' + ("#".repeat(1.9 * player.getPlayersLocation().length)));
    console.log(`# ${player.getPlayersPosition()} #`);
    map_1.default.forEach(function (zone) {
        if (zone.ZONECODE == player.getPlayersLocation()) {
            console.log(`# ${zone.ZONENAME} #`);
        }
    });
    console.log('\n' + ("#".repeat(4 * player.getPlayersLocation().length)));
}
exports.showMap = showMap;
