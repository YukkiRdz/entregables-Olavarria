import { Mage } from "./Mage"; 
import { Fighter } from "./Fighter";
import { Healer } from "./Healer";
import { Archer } from "./Archer";
import { Enemy } from "./Enemy";
// import { GrandMaster } from "./evoGrandMaster"; 


// ------------------------------instancias de personajes---------------------------------------

const mage = new Mage('Yukki', 5, ['staff'], 15, [{skillName: 'fireball', skillDamage: 50}]); //mago level 5;
const enemy = new Enemy('Orc', 6, ['mace']);
// const grandMaster = new GrandMaster('YukkiEvo', 2, ['staff'], [{skillName: 'meteor', skillDamage: 150}]);
const archer = new Archer('Legolas', 2, ['arc'], [{skillName: 'icearrow', skillDamage: 35}]);
const healer = new Healer('Azagi', 3, ['wand'], [{skillName: 'benevolence', skillHealing: 25}]);
const fighter = new Fighter('Kami', 8, ['axe'], [{skillName: 'meteor', skillDamage: 150}]);


// ------------------------------mage level < 10---------------------------------------

console.log(mage);

//metodo evolucion antes de llegar a nivel 10
let evolucion = mage.Evolucion();
if (evolucion) {
    console.log(evolucion);
} else {
    console.log("Aún no puede evolucionar.");
}

// ------------------------------mage level 10---------------------------------------

mage.setLevel(10); // subimos al level 10
console.log(`El nivel actual de ${mage.getName()} es ${mage.getLevel()}`);

//metodo evolucion con level 10
evolucion = mage.Evolucion();
if (evolucion) {
    console.log(evolucion);
} else {
    console.log("Aún no puede evolucionar.");
}

// console.log(enemy);
// console.log(grandMaster);
// console.log(archer);
// console.log(healer);
// console.log(fighter);

// ------------------------------simulacion---------------------------------------

// console.log(mage);
// enemy.Attack(mage);
// console.log(`${mage.getName()} tiene ${mage.getHP()} HP actual.`);
// console.log(enemy);
mage.Attack(enemy, ['Staff']);
// mage.Attack(enemy);

// mage.AddSkills('DarkShadow', 120);
// console.log(mage);
enemy.Defense(mage.getDamage());
mage.UseSkill('fireball', enemy);
enemy.Defense(mage.getSkillDamage('fireball'));
enemy.Attack(mage, ['sword']);
mage.Defense(enemy.getDamage());
mage.UseSkill('fireball', enemy);
enemy.Defense(mage.getSkillDamage('fireball'));
mage.setHP(0);
healer.UseSkill('divinelight', mage);
