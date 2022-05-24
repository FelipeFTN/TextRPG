import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export class playerClass {
    private name: string;
    private hp: number;
    private mp: number;
    private status: string[];
    private location: string;
    private position: string;

    constructor() {
        this.name = "";
        this.hp = 0;
        this.mp = 0;
        this.status = [];
        this.location = "start"
        this.position = "b2";
    }

    public getPlayersLocation(): string { return this.location; }
    public getPlayersPosition(): string { return this.position; }

    public move(value: string): void {

    }

    public interact(value: string): void {

    }
    
}