export class Vehiculo {
    protected marca: string;
    protected motor: string;
    protected patente: string;
    protected titular: string;
    protected modelo: number;
    protected estado: boolean;

    constructor(marca: string, motor: string, patente:string, titular: string, modelo: number, estado: boolean) {
        this.marca = marca;
        this.motor = motor;
        this.patente = patente;
        this.titular = titular;
        this.modelo = modelo;
        this.estado = estado
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

    public getEstado(): boolean {
        return this.estado;
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

    public setEstado(estado: boolean): void {
        this.estado = estado;
    }
}