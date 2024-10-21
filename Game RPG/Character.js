"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, level, HP, weapon, damage) {
        this.name = name;
        this.level = level;
        this.HP = HP;
        this.weapon = weapon;
        this.damage = damage;
    }
    //getters
    Character.prototype.getName = function () {
        return this.name;
    };
    Character.prototype.getLevel = function () {
        return this.level;
    };
    Character.prototype.getHP = function () {
        return this.HP;
    };
    Character.prototype.getWeapon = function () {
        return this.weapon;
    };
    Character.prototype.getDamage = function () {
        return this.damage;
    };
    //setters
    Character.prototype.setName = function (name) {
        this.name = name;
    };
    Character.prototype.setLevel = function (level) {
        this.level = level;
    };
    Character.prototype.setHP = function (HP) {
        this.HP = HP;
    };
    //damage recibido, si el hp llega a 0 es derrotado
    Character.prototype.TakeDamage = function (damage) {
        this.HP = Math.max(this.HP - damage, 0); //se asegura de que el HP no baje de 0
        console.log("".concat(this.name, " tiene un HP actual de ").concat(this.HP));
        if (this.HP === 0) {
            console.log("".concat(this.name, " ha sido derrotado"));
        }
    };
    return Character;
}());
exports.Character = Character;
