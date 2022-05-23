// Typescript Text RPG
// No Name Yet :D

import { stdin as input, stdout as output } from 'process'; // npm install @types/node
import { playerClass } from './classes/player'
import { titleScreen } from './menu/main'
import * as readline from 'readline';

let player: playerClass = new playerClass();

titleScreen();