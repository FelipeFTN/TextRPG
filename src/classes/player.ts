import { throws } from "assert";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class PlayerClass {
    private name: string;
    private hp: number;
    private mp: number;
    private attack: number;
    private class: string;
    private status: string[];
    private location: string;
    private position: string;

    constructor() {
        this.name = "";
        this.hp = 0;
        this.mp = 0;
        this.attack = 0;
        this.class = "";
        this.status = [];
        this.location = "start"
        this.position = "b2";
    }

    public getPlayerLocation(): string { return this.location; }
    public getPlayerPosition(): string { return this.position; }

    public setPlayerName(value: string): void { this.name = value; }
    public setPlayerClass(value: any): void {
        this.class = value.name;
        this.hp = value.hp;
        this.mp = value.mp;
        this.attack = value.attack;
    }

    public move(value: string): void { }
    public interact(value: string): void { }
    
}