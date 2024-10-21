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
exports.Enemy = void 0;
var Character_1 = require("./Character");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, level, weapon) {
        if (weapon === void 0) { weapon = ['mace', 'sword']; }
        return _super.call(this, name, level, 100, weapon, 15) || this; //el damage varia segun la class
    }
    //metodo para agregar armas al personaje
    Enemy.prototype.AddWeapon = function (weapon) {
        this.weapon.push(weapon);
    };
    //metodo de ataque por defecto
    Enemy.prototype.Attack = function (target, weapon) {
        console.log("".concat(this.name, " ataca con ").concat(this.weapon[0], " y ha causado ").concat(this.damage, " de da\u00F1o."));
        if (!target.Defense(this.damage)) { // Si `Defend` devuelve `false`, aplica daño
            target.TakeDamage(this.damage);
        }
    };
    //metodo de defensa
    Enemy.prototype.Defense = function (damage) {
        if (damage <= 20) {
            console.log("".concat(this.name, " se ha defendido con exito."));
            return true; //si el damage es menor o igual a 20 la defensa es exitosa
        }
        else {
            console.log("".concat(this.name, " no ha podido defenderse del ataque. Ha recibido ").concat(damage, " de da\u00F1o."));
            return false; //si el damage es mayor a 20 la defensa a fallado
        }
    };
    return Enemy;
}(Character_1.Character));
exports.Enemy = Enemy;
