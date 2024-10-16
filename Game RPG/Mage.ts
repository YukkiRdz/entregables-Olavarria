import { Character } from "./Character";

export class Mage extends Character{
    private mageSkills: {skillName: string, skillDamage: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, HP: number = 200, weapon: string[] = ['staff'], damage:number, mageSkills: {skillName: string, skillDamage: number}[] = [{skillName: 'fireball', skillDamage: 50}]) {
    super(name, level, HP, weapon, 15); //el damage varia segun la class
    this.mageSkills = mageSkills;
    }

    public getSkillDamage(skillName: string): number {
        const skill = this.mageSkills.find(skill => skill.skillName === skillName);
        return skill ? skill.skillDamage : 0;
    }

    public getSkills(): string[] {
        return Object.keys(this.mageSkills); //devuelve un array de propiedades enumerables del objeto dado
    }

    //metodo para agregar armas al personaje
    public AddWeapon(weapon: string) {
        this.weapon.push(weapon);
    }

    //Agregar skills
    public AddSkills(skill: string, damage: number) {
        this.mageSkills.push({skillName: skill, skillDamage: damage}); //cada skill y su respectivo damage se almacenan en el array de habilidades
    }

   //damage recibido, si el hp llega a 0 es derrotado
    public TakeDamage(damage: number) {
    this.HP = Math.max(this.HP - damage, 0); //se asegura de que el HP no baje de 0
    console.log(`${this.name} tiene un HP actual de ${this.HP}`);
    if(this.HP === 0){
        console.log(`${this.name} ha sido derrotado`);
    }
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
        const skill = this.mageSkills.find(skill => skill.skillName === skillName); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log(`${this.name} ha utilizado ${skill.skillName} en ${target.getName()}.`);
            if (!target.Defense(skill.skillDamage)) {  //Si el target no puede defenderse le hace daño
                target.TakeDamage(skill.skillDamage);
            }
            if(skill.skillDamage > target.getHP()) {
                console.log(`${this.name} ha eliminado a ${target.getName()} y sube de nivel.`);
                this.level = this.level + 1;
                console.log(`Su nivel actual es ${this.level}.`);
            }
        } else {
            console.log(`${this.name} no tiene la habilidad ${skillName}.`);
        }
    }

    //la defensa del mago es de 10
    public Defense(damage: number): boolean {
        if(damage <= 10) {
            console.log(`${this.name} se ha defendido con exito.`);
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        } else {
            console.log(`${this.name} no ha podido defenderse del ataque. Ha recibido ${damage} de daño.`);
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    }
}
