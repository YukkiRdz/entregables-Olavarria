import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private ruedas: number;

    constructor(marca: string, motor: string, patente:string, titular: string, modelo: number, estado: boolean) {
        super(marca, motor, patente, titular, modelo, estado);
        this.ruedas = 4;
    }
}