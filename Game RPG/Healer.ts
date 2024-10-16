import { Character } from "./Character";

export class Healer extends Character {
    private healerSkills: {skillName: string, skillDamage: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, HP: number = 150, weapons: string[] = ["wand"], skills: {skillName: string, skillDamage: number}[]) {
        super(name, level, HP, weapons, 5);
        this.healerSkills = skills;
    }

    public getSkills(): string[] {
        return Object.keys(this.healerSkills); //devuelve un array de propiedades enumerables del objeto dado
    }

    //metodo para agregar armas al personaje
    public AddWeapon(weapon: string) {
        this.weapon.push(weapon);
    }

    //Agregar skills
    public AddSkills(skill: string, damage: number) {
        this.healerSkills.push({skillName: skill, skillDamage: damage}); //cada skill y su respectivo damage se almacenan en el array de habilidades
    }

    //metodo de ataque por defecto
    public Attack(target: Character): void {
        const skill =this.healerSkills[0]; //por defecto ataca con la primera skill
        console.log(`${this.name} lanza ${skill.skillName} con ${this.weapon[0]} y ha causado ${skill.skillDamage} de daño.`);
        target.TakeDamage(skill.skillDamage);
        if(skill.skillDamage > target.getHP()) {
            console.log(`${this.name} ha eliminado a ${target} y sube de nivel.`);
            this.level = this.level + 1;
            console.log(`Su nivel actual es ${this.level}.`);
        }
    }

    //Usar una skill en especifico
    public UseSkill(skillName: string, target: Character) {
        const skill = this.healerSkills.find(skill => skill.skillName === skillName); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log(`${this.name} ha utilizado ${skill.skillName} en ${target.getName()} y ha causado ${skill.skillDamage} de daño.`);
            target.TakeDamage(skill.skillDamage);
            if(skill.skillDamage > target.getHP()) {
                console.log(`${this.name} ha eliminado a ${target} y sube de nivel.`);
                this.level = this.level + 1;
                console.log(`Su nivel actual es ${this.level}.`);
            }
        } else {
            console.log(`${this.name} no tiene la habilidad ${skillName}.`);
        }
    }

    //comando unico para la class healer
    public heal(target: Character) {
        //siempre cura 15 de HP
        const heal: number = 15;
        const newHP = Math.min(target.getHP() + heal, target.getHP());
        target.setHP(newHP);
        console.log(`${this.name} ha sanado a ${target.getName()} con ${heal} HP! su HP actual es: ${target.getHP()}`);
    }

    public Defend(): void {
        
    }
}