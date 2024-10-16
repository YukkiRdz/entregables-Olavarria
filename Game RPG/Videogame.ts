import { Mage } from "./Mage";
import { Fighter } from "./Fighter";
import { Healer } from "./Healer";
import { Archer } from "./Archer";
import { Enemy } from "./Enemy";

const mage = new Mage('Yukki', 5, 200, ['staff'], 15, [{skillName: 'fireball', skillDamage: 50}])
const enemy = new Enemy('Orc', 6, 100, ['mace']);


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
