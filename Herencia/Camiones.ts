import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private ruedas: number;

    constructor(marca: string, motor: string, patente:string, titular: string, modelo: number, ruedas: number, estado: boolean) {
        super(marca, motor, patente, titular, modelo, estado);
        this.ruedas = this.setRuedas(ruedas);
    }

    public setRuedas(ruedas: number) : number {
        this.ruedas = ruedas;
        return this.ruedas;
    }
}