import { Character } from "./Character";

export class Healer extends Character {
    private healerSkills: {skillName: string, skillHealing: number}[]; //cada skill tiene un damage especifico

    constructor(name: string, level: number, weapons: string[] = ["wand"], healerSkills: {skillName: string, skillHealing: number}[] = [{skillName: 'divinelight', skillHealing: 15}, {skillName: 'benevolence', skillHealing: 25}]) {
        super(name, level, 150, weapons, 5);
        this.healerSkills = healerSkills;
    }

    public getSkills(): string[] {
        return Object.keys(this.healerSkills); //devuelve un array de propiedades enumerables del objeto dado
    }

    //metodo para agregar armas al personaje
    public AddWeapon(weapon: string) {
        this.weapon.push(weapon);
    }

    //Agregar skills
    public AddSkills(skill: string, heal: number) {
        this.healerSkills.push({skillName: skill, skillHealing: heal}); //cada skill y su respectivo damage se almacenan en el array de habilidades
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
        const skill = this.healerSkills.find(skill => skill.skillName === skillName); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log(`${this.name} ha utilizado ${skill.skillName} en ${target.getName()}.`);
            if (!target.Defense(skill.skillHealing)) {  //Si el target no puede defenderse le hace daño
                target.TakeDamage(skill.skillHealing);
            }
            if(target.getHP() === 0) {
                console.log(`${this.name} fue eliminado, no puedes revivirlo con esta habilidad.`);
            } else if (skillName === 'divine light' && target.getHP() === 0){
                this.HP = 15;
                console.log(`${this.name} ha sido revivido. Su HP actual es de ${target.getHP()}`);
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

    //la defensa del healer es de 5
    public Defense(damage: number): boolean {
        if(damage <= 5) {
            console.log(`${this.name} se ha defendido con exito.`);
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        } else {
            console.log(`${this.name} no ha podido defenderse del ataque. Ha recibido ${damage} de daño.`);
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    }
}