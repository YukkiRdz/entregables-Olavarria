"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Healer = void 0;
var Character_1 = require("./Character");
var Healer = /** @class */ (function (_super) {
    __extends(Healer, _super);
    function Healer(name, level, weapons, healerSkills) {
        if (weapons === void 0) { weapons = ["wand"]; }
        if (healerSkills === void 0) { healerSkills = [{ skillName: 'divinelight', skillHealing: 15 }, { skillName: 'benevolence', skillHealing: 25 }]; }
        var _this = _super.call(this, name, level, 150, weapons, 5) || this;
        _this.healerSkills = healerSkills;
        return _this;
    }
    Healer.prototype.getSkills = function () {
        return Object.keys(this.healerSkills); //devuelve un array de propiedades enumerables del objeto dado
    };
    //metodo para agregar armas al personaje
    Healer.prototype.AddWeapon = function (weapon) {
        this.weapon.push(weapon);
    };
    //Agregar skills
    Healer.prototype.AddSkills = function (skill, heal) {
        this.healerSkills.push({ skillName: skill, skillHealing: heal }); //cada skill y su respectivo damage se almacenan en el array de habilidades
    };
    //metodo de ataque por defecto
    Healer.prototype.Attack = function (target, weapon) {
        var basicAttack = this.damage; //por defecto ataca con su ataque basico
        console.log("".concat(this.name, " ataca con ").concat(weapon, "."));
        if (!target.Defense(basicAttack)) { //Si el target no puede defenderse le hace daño
            target.TakeDamage(basicAttack);
        }
        if (basicAttack > target.getHP()) {
            console.log("".concat(this.name, " ha eliminado a ").concat(target, " y sube de nivel."));
            this.level = this.level + 1;
            console.log("Su nivel actual es ".concat(this.level, "."));
        }
    };
    //Usar una skill en especifico
    Healer.prototype.UseSkill = function (skillName, target) {
        var skill = this.healerSkills.find(function (skill) { return skill.skillName === skillName; }); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log("".concat(this.name, " ha utilizado ").concat(skill.skillName, " en ").concat(target.getName(), "."));
            if (!target.Defense(skill.skillHealing)) { //Si el target no puede defenderse le hace daño
                target.TakeDamage(skill.skillHealing);
            }
            if (target.getHP() === 0) {
                console.log("".concat(this.name, " fue eliminado, no puedes revivirlo con esta habilidad."));
            }
            else if (skillName === 'divine light' && target.getHP() === 0) {
                this.HP = 15;
                console.log("".concat(this.name, " ha sido revivido. Su HP actual es de ").concat(target.getHP()));
            }
        }
        else {
            console.log("".concat(this.name, " no tiene la habilidad ").concat(skillName, "."));
        }
    };
    //comando unico para la class healer
    Healer.prototype.heal = function (target) {
        //siempre cura 15 de HP
        var heal = 15;
        var newHP = Math.min(target.getHP() + heal, target.getHP());
        target.setHP(newHP);
        console.log("".concat(this.name, " ha sanado a ").concat(target.getName(), " con ").concat(heal, " HP! su HP actual es: ").concat(target.getHP()));
    };
    //la defensa del healer es de 5
    Healer.prototype.Defense = function (damage) {
        if (damage <= 5) {
            console.log("".concat(this.name, " se ha defendido con exito."));
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        }
        else {
            console.log("".concat(this.name, " no ha podido defenderse del ataque. Ha recibido ").concat(damage, " de da\u00F1o."));
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    };
    return Healer;
}(Character_1.Character));
exports.Healer = Healer;
