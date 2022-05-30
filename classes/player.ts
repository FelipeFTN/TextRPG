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

    public GetPlayerName(): string { return this.name; }
    public GetPlayerClass(): string { return this.class; }
    public GetPlayerLocation(): string { return this.location; }
    public GetPlayerPosition(): string { return this.position; }
    public GetPlayerCombatInfo(): any { return { "hp": this.hp, "mp": this.mp, "attack": this.attack }; }

    public SetPlayerName(value: string): void { this.name = value; }
    public SetPlayerClass(value: any): void {
        this.class = value.name;
        this.hp = value.hp;
        this.mp = value.mp;
        this.attack = value.attack;
    }

    public Move(value: string): void { }
    public Interact(value: string): void { }
    
}