import { Character } from "./Character";

export class Fighter extends Character{
    private fighterSkills: {skillName: string, skillDamage: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, HP: number = 400, weapon: string[] = ['axe', 'fence'], skills: {skillName: string, skillDamage: number}[]) {
    super(name, level, HP, weapon, 45); //el damage varia segun la class
    this.fighterSkills = skills;
    }

    public getSkills(): string[] {
        return Object.keys(this.fighterSkills); //devuelve un array de propiedades enumerables del objeto dado
    }

    //metodo para agregar armas al personaje
    public AddWeapon(weapon: string) {
        this.weapon.push(weapon);
    }

    //Agregar skills
    public AddSkills(skill: string, damage: number) {
        this.fighterSkills.push({skillName: skill, skillDamage: damage}); //cada skill y su respectivo damage se almacenan en el array de habilidades
    }

    //metodo de ataque por defecto
    public Attack(target: Character): void {
        const skill =this.fighterSkills[0]; //por defecto ataca con la primera skill
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
        const skill = this.fighterSkills.find(skill => skill.skillName === skillName); //buscamos la skill dentro del array
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

    public Defend(): void {
        
    }
}