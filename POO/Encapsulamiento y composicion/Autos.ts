export class Auto {
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

    //getters
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

    //setters
    public setMarca(marca: string): void {
        if (marca != '') {
            this.marca = marca;
        }
    }

    public setMotor(motor: string): void {
        if (motor != '') {
            this.motor = motor;
        }
    }

    public setPatente(patente: string): void {
        if (patente != '') {
            this.patente = patente;
        }
    }

    public setTitular(nombreTitular: string): void {
        if (nombreTitular != '') {
            this.titular = nombreTitular;
        }
    }

    public setModelo(modelo: number): void {
        if (modelo >= 2004) {
            this.modelo = modelo;
        } else {
            console.log('El modelo debe contener 4 digitos');
        }
    }
}