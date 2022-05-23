"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMap = void 0;
const map_1 = __importDefault(require("./map"));
function showMap(player) {
    console.log('\n' + ("#".repeat(1.9 * player.location.length)));
    console.log(`# ${player.position.toUpperCase()} #`);
    map_1.default.forEach(function (zone) {
        if (zone.ZONECODE == player.position) {
            console.log(`# ${zone.ZONENAME} #`);
        }
    });
    console.log('\n' + ("#".repeat(4 * player.location.length)));
}
exports.showMap = showMap;
