import { GrandMaster } from "./evoGrandMaster";
import { Character } from "./Character";

export class Mage extends Character{
    private mageSkills: {skillName: string, skillDamage: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, weapon: string[] = ['staff'], damage:number, mageSkills: {skillName: string, skillDamage: number}[] = [{skillName: 'fireball', skillDamage: 50}]) {
    super(name, level, 200, weapon, 15); //el damage varia segun la class
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

        //metodo de evolucion a GrandMaster
        public Evolucion(): GrandMaster | null {
        //si el mago es level 10 puede evolucionar
        if (this.level >= 10) {
            console.log(`${this.name} ha evolucionado a GrandMaster.`);
            return new GrandMaster(this.name, this.level, this.weapon);  // Crea una nueva instancia de GrandMaster
        } else {
            console.log(`${this.name} aún no tiene el nivel necesario para evolucionar.`);
            return null; // si no es level 10 o mayor, no puede evolucionar
        }
    }
}
