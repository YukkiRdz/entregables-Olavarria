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
exports.Fighter = void 0;
var Character_1 = require("./Character");
var Fighter = /** @class */ (function (_super) {
    __extends(Fighter, _super);
    function Fighter(name, level, weapon, skills) {
        if (weapon === void 0) { weapon = ['axe', 'fence']; }
        var _this = _super.call(this, name, level, 400, weapon, 45) || this; //el damage varia segun la class
        _this.fighterSkills = skills;
        return _this;
    }
    Fighter.prototype.getSkills = function () {
        return Object.keys(this.fighterSkills); //devuelve un array de propiedades enumerables del objeto dado
    };
    //metodo para agregar armas al personaje
    Fighter.prototype.AddWeapon = function (weapon) {
        this.weapon.push(weapon);
    };
    //Agregar skills
    Fighter.prototype.AddSkills = function (skill, damage) {
        this.fighterSkills.push({ skillName: skill, skillDamage: damage }); //cada skill y su respectivo damage se almacenan en el array de habilidades
    };
    //metodo de ataque por defecto
    Fighter.prototype.Attack = function (target, weapon) {
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
    Fighter.prototype.UseSkill = function (skillName, target) {
        var skill = this.fighterSkills.find(function (skill) { return skill.skillName === skillName; }); //buscamos la skill dentro del array
        //si la skill ingresada existe en el array
        if (skill) {
            console.log("".concat(this.name, " ha utilizado ").concat(skill.skillName, " en ").concat(target.getName(), " y ha causado ").concat(skill.skillDamage, " de da\u00F1o."));
            target.TakeDamage(skill.skillDamage);
            if (skill.skillDamage > target.getHP()) {
                console.log("".concat(this.name, " ha eliminado a ").concat(target, " y sube de nivel."));
                this.level = this.level + 1;
                console.log("Su nivel actual es ".concat(this.level, "."));
            }
        }
        else {
            console.log("".concat(this.name, " no tiene la habilidad ").concat(skillName, "."));
        }
    };
    //la defensa del fighter es de 15
    Fighter.prototype.Defense = function (damage) {
        if (damage <= 25) {
            console.log("".concat(this.name, " se ha defendido con exito."));
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        }
        else {
            console.log("".concat(this.name, " no ha podido defenderse del ataque. Ha recibido ").concat(damage, " de da\u00F1o."));
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    };
    return Fighter;
}(Character_1.Character));
exports.Fighter = Fighter;
