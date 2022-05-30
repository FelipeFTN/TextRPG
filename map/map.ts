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

interface mapZone {
    ZONECODE: string;
    ZONENAME: string;
    DESCRIPTION: string;
    EXAMINATION: string;
    SOLVED: boolean;
    UP: string;
    DOWN: string;
    LEFT: string;
    RIGHT: string;
}

// MAPPING ALL ZONES

let a1: mapZone = {
    ZONECODE: "a1",
    ZONENAME: "Town Market",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b1",
    LEFT: "",
    RIGHT: "a2" 
}
let a2: mapZone = {
    ZONECODE: "a2",
    ZONENAME: "Town Entrance",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b2",
    LEFT: "a1",
    RIGHT: "a3" 
}
let a3: mapZone = {
    ZONECODE: "a3",
    ZONENAME: "Town Square",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b3",
    LEFT: "a2",
    RIGHT: "a4" 
}
let a4: mapZone = {
    ZONECODE: "a4",
    ZONENAME: "Town Hall",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "",
    DOWN: "b4",
    LEFT: "a3",
    RIGHT: "" 
}
let b1: mapZone = {
    ZONECODE: "b1",
    ZONENAME: "Unaccessible",
    DESCRIPTION: "description",
    EXAMINATION: "examine",
    SOLVED: false,
    UP: "a1",
    DOWN: "c1",
    LEFT: "",
    RIGHT: "b2" 
}
let b2: mapZone = {
    ZONECODE: "b2",
    ZONENAME: "Home",
    DESCRIPTION: "This is your home!",
    EXAMINATION: "Your Home looks the same - nothing has changed.",
    SOLVED: false,
    UP: "a2",
    DOWN: "c2",
    LEFT: "b1",
    RIGHT: "b3" 
}

let mapZones: mapZone[] = [];
mapZones.push(a1);
mapZones.push(a2);
mapZones.push(a3);
mapZones.push(a4);
mapZones.push(b1);
mapZones.push(b2);

export default mapZones;