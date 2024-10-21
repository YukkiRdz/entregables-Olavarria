export abstract class Character {
    protected name: string;
    protected level: number;
    protected HP: number;
    protected weapon: string[];
    protected damage: number;

    constructor (name: string, level: number, HP: number, weapon: string[], damage: number) {
        this.name = name;
        this.level = level;
        this.HP = HP;
        this.weapon = weapon;
        this.damage = damage;
    }

    //getters
    public getName(): string {
        return this.name;
    }

    public getLevel(): number {
        return this.level;
    }

    public getHP(): number {
        return this.HP;
    }

    public getWeapon(): string[] {
        return this.weapon;     
    }

    public getDamage(): number {
        return this.damage;
    }

    //setters
    public setName(name: string) {
        this.name = name;
    }

    public setLevel(level: number) {
        this.level = level;
    }

    public setHP(HP: number) {
        this.HP = HP;
    }

    //metodo polimorfico para agregar armas al personaje
    abstract AddWeapon(weapon: string): void;

    //damage recibido, si el hp llega a 0 es derrotado
    public TakeDamage(damage: number) {
    this.HP = Math.max(this.HP - damage, 0); //se asegura de que el HP no baje de 0
    console.log(`${this.name} tiene un HP actual de ${this.HP}`);
    if(this.HP === 0){
        console.log(`${this.name} ha sido derrotado`);
        }
    }
    
    //metodo polimorfico de ataque
    abstract Attack(target: Character, weapon: string[]): void;

    //metodo polimorfico de defensa
    abstract Defense(damage: number): boolean;

    // public Evolution(level: number) {
    //     if(level > 5) {
    //         console.log(`Su personaje a evolucionado a: ${FirstEvolution}`);
    //     } else if (level > 10) {
    //         console.log(`Su personaje a evolucionado a: ${SecondEvolution}`);
    //     } else if (level > 15) {
    //         console.log(`Su personaje a evolucionado a: ${ThirdEvolution}`);
    //     }
    // }
}