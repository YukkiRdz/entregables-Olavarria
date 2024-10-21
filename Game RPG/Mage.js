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
exports.Mage = void 0;
var evoGrandMaster_1 = require("./evoGrandMaster");
var Character_1 = require("./Character");
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name, level, weapon, damage, mageSkills) {
        if (weapon === void 0) { weapon = ['staff']; }
        if (mageSkills === void 0) { mageSkills = [{ skillName: 'fireball', skillDamage: 50 }]; }
        var _this = _super.call(this, name, level, 200, weapon, 15) || this; //el damage varia segun la class
        _this.mageSkills = mageSkills;
        return _this;
    }
    Mage.prototype.getSkillDamage = function (skillName) {
        var skill = this.mageSkills.find(function (skill) { return skill.skillName === skillName; });
        return skill ? skill.skillDamage : 0;
    };
    Mage.prototype.getSkills = function () {
        return Object.keys(this.mageSkills); //devuelve un array de propiedades enumerables del objeto dado
    };
    //metodo para agregar armas al personaje
    Mage.prototype.AddWeapon = function (weapon) {
        this.weapon.push(weapon);
    };
    //Agregar skills
    Mage.prototype.AddSkills = function (skill, damage) {
        this.mageSkills.push({ skillName: skill, skillDamage: damage }); //cada skill y su respectivo damage se almacenan en el array de habilidades
    };
    //metodo de ataque por defecto
    Mage.prototype.Attack = function (target, weapon) {
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
    Mage.prototype.UseSkill = function (skillName, target) {
        var skill = this.mageSkills.find(function (skill) { return skill.skillName === skillName; }); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log("".concat(this.name, " ha utilizado ").concat(skill.skillName, " en ").concat(target.getName(), "."));
            if (!target.Defense(skill.skillDamage)) { //Si el target no puede defenderse le hace daño
                target.TakeDamage(skill.skillDamage);
            }
            if (skill.skillDamage > target.getHP()) {
                console.log("".concat(this.name, " ha eliminado a ").concat(target.getName(), " y sube de nivel."));
                this.level = this.level + 1;
                console.log("Su nivel actual es ".concat(this.level, "."));
            }
        }
        else {
            console.log("".concat(this.name, " no tiene la habilidad ").concat(skillName, "."));
        }
    };
    //la defensa del mago es de 10
    Mage.prototype.Defense = function (damage) {
        if (damage <= 10) {
            console.log("".concat(this.name, " se ha defendido con exito."));
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        }
        else {
            console.log("".concat(this.name, " no ha podido defenderse del ataque. Ha recibido ").concat(damage, " de da\u00F1o."));
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    };
    //metodo de evolucion a GrandMaster
    Mage.prototype.Evolucion = function () {
        //si el mago es level 10 puede evolucionar
        if (this.level >= 10) {
            console.log("".concat(this.name, " ha evolucionado a GrandMaster."));
            return new evoGrandMaster_1.GrandMaster(this.name, this.level, this.weapon); // Crea una nueva instancia de GrandMaster
        }
        else {
            console.log("".concat(this.name, " a\u00FAn no tiene el nivel necesario para evolucionar."));
            return null; // si no es level 10 o mayor, no puede evolucionar
        }
    };
    return Mage;
}(Character_1.Character));
exports.Mage = Mage;
