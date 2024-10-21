import { Character } from "./Character";

export class Fighter extends Character{
    private fighterSkills: {skillName: string, skillDamage: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, weapon: string[] = ['axe', 'fence'], skills: {skillName: string, skillDamage: number}[]) {
    super(name, level, 400, weapon, 45); //el damage varia segun la class
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
    public Attack(target: Character,  weapon: string[]): void {
        const basicAttack = this.damage; //por defecto ataca con su ataque basico
        console.log(`${this.name} ataca con ${weapon}.`);
        if (!target.Defense(basicAttack)) {  //Si el target no puede defenderse le hace daño
            target.TakeDamage(basicAttack);
        }
        if(basicAttack > target.getHP()) {
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

    //la defensa del fighter es de 15
    public Defense(damage: number): boolean {
    if(damage <= 25) {
        console.log(`${this.name} se ha defendido con exito.`);
        return true; //si el damage es menor o igual a 20 la defensa es exitosa
    } else {
        console.log(`${this.name} no ha podido defenderse del ataque. Ha recibido ${damage} de daño.`);
        return false; //si el damage es mayor a 20 la defensa a fallado
    }
}
}