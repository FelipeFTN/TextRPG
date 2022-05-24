"use strict";
//             MAP
// ----------------------------
// |  a1 |  a2  |  a3  |  a4  |
// ----------------------------
// |  b1 |  b2  |  b3  |  b4  |
// ----------------------------
// |  c1 |  c2  |  c3  |  c4  |
// ----------------------------
// |  d1 |  d2  |  d3  |  d4  |
// ----------------------------
Object.defineProperty(exports, "__esModule", { value: true });
// MAPPING ALL ZONES
let a1 = {
    ZONECODE: "a1",
    ZONENAME: "Town Market",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b1",
    LEFT: "",
    RIGHT: "a2"
};
let a2 = {
    ZONECODE: "a2",
    ZONENAME: "Town Entrance",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b2",
    LEFT: "a1",
    RIGHT: "a3"
};
let a3 = {
    ZONECODE: "a3",
    ZONENAME: "Town Square",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b3",
    LEFT: "a2",
    RIGHT: "a4"
};
let a4 = {
    ZONECODE: "a4",
    ZONENAME: "Town Hall",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b4",
    LEFT: "a3",
    RIGHT: ""
};
let b1 = {
    ZONECODE: "b1",
    ZONENAME: "Unaccessible",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "a1",
    DOWN: "c1",
    LEFT: "",
    RIGHT: "b2"
};
let b2 = {
    ZONECODE: "b2",
    ZONENAME: "Home",
    DESCRIPTION: "This is your home!",
    EXAMINATION: "Your Home looks the same - nothing has changed.",
    SOLVED: false,
    UP: "a2",
    DOWN: "c2",
    LEFT: "b1",
    RIGHT: "b3"
};
let mapZones = [];
mapZones.push(a1);
mapZones.push(a2);
mapZones.push(a3);
mapZones.push(a4);
mapZones.push(b1);
mapZones.push(b2);
exports.default = mapZones;
