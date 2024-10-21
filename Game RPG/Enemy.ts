import { Character } from "./Character";

export class Enemy extends Character {
    constructor(name: string, level: number, weapon: string[] = ['mace', 'sword']) {
        super(name, level, 100, weapon, 15); //el damage varia segun la class
        }

    //metodo para agregar armas al personaje
    public AddWeapon(weapon: string) {
        this.weapon.push(weapon);
    }

    //metodo de ataque por defecto
    public Attack(target: Character, weapon: string[]): void {
        console.log(`${this.name} ataca con ${this.weapon[0]} y ha causado ${this.damage} de daño.`);
        if (!target.Defense(this.damage)) {  // Si `Defend` devuelve `false`, aplica daño
            target.TakeDamage(this.damage);
        }
    }

    //metodo de defensa
    public Defense(damage: number): boolean {
        if(damage <= 20) {
            console.log(`${this.name} se ha defendido con exito.`);
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        } else {
            console.log(`${this.name} no ha podido defenderse del ataque. Ha recibido ${damage} de daño.`);
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    }
}