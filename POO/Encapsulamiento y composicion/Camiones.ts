export class Camion {
    private marca: string;
    private motor: string;
    private patente: string;
    private titular: string;
    private modelo: number;

    constructor(marca: string, motor: string, patente:string, titular: string, modelo: number) {
        this.marca = marca;
        this.motor = motor;
        this.patente = patente;
        this.titular = titular;
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getMotor(): string {
        return this.motor;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getTitular(): string {
        return this.titular;
    }

    public getModelo(): number {
        return this.modelo;
    }

    public setTitular(nombreTitular: string): void {
        if (nombreTitular != '') {
            this.titular = nombreTitular;
        }
    }
}