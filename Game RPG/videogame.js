"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mage_1 = require("./Mage");
var Fighter_1 = require("./Fighter");
var Healer_1 = require("./Healer");
var Archer_1 = require("./Archer");
var Enemy_1 = require("./Enemy");
// import { GrandMaster } from "./evoGrandMaster"; 
// ------------------------------instancias de personajes---------------------------------------
var mage = new Mage_1.Mage('Yukki', 5, ['staff'], 15, [{ skillName: 'fireball', skillDamage: 50 }]); //mago level 5;
var enemy = new Enemy_1.Enemy('Orc', 6, ['mace']);
// const grandMaster = new GrandMaster('YukkiEvo', 2, ['staff'], [{skillName: 'meteor', skillDamage: 150}]);
var archer = new Archer_1.Archer('Legolas', 2, ['arc'], [{ skillName: 'icearrow', skillDamage: 35 }]);
var healer = new Healer_1.Healer('Azagi', 3, ['wand'], [{ skillName: 'benevolence', skillHealing: 25 }]);
var fighter = new Fighter_1.Fighter('Kami', 8, ['axe'], [{ skillName: 'meteor', skillDamage: 150 }]);
// ------------------------------mage level < 10---------------------------------------
console.log(mage);
//metodo evolucion antes de llegar a nivel 10
var evolucion = mage.Evolucion();
if (evolucion) {
    console.log(evolucion);
}
else {
    console.log("Aún no puede evolucionar.");
}
// ------------------------------mage level 10---------------------------------------
mage.setLevel(10); // subimos al level 10
console.log("El nivel actual de ".concat(mage.getName(), " es ").concat(mage.getLevel()));
//metodo evolucion con level 10
evolucion = mage.Evolucion();
if (evolucion) {
    console.log(evolucion);
}
else {
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
