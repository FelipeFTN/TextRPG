export class playerClass {
    name: string;
    hp: number;
    mp: number;
    status: string[];
    location: string;
    position: string;

    constructor() {
        this.name = '';
        this.hp = 0;
        this.mp = 0;
        this.status = [];
        this.location = 'start'
        this.position = 'b2';
    }
}