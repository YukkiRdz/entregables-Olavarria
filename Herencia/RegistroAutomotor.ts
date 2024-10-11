import { Auto } from "./Autos";
import { Camion } from "./Camiones";
import { Moto } from "./Motos";
import { Vehiculo } from "./Vehiculo";

export class RegistroAutomor {
    private nombre: string;
    private vehiculos: Vehiculo[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    //obtener el nombre del registro automotor
    getNombre(): string {
        return this.nombre;
    }

    //obtener todos los vehiculos
    getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    //agregar vehiculo
    addVehiculo(vehiculo: 'auto' | 'moto' | 'camion', marca: string, motor: string, patente: string, titular: string, modelo: number, estado: boolean, ruedas?: number) {
        //Si el vehiculo es un auto
        if (vehiculo === 'auto' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined) {
            //Se crea un nuevo auto con las propiedades pasadas por parametros
            const newAuto = new Auto(marca, motor, patente, titular, modelo, estado);
            //Se agrega al array de autos
            this.vehiculos.push(newAuto);
            //Si el vehiculo es una moto
        } else if (vehiculo === 'moto' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined) {
            //Se crea una nueva moto con las propiedades pasadas por parametros
            const newMoto = new Moto(marca, motor, patente, titular, modelo, estado);
            //Se agrega al array de motos
            this.vehiculos.push(newMoto);
            //Si el vehiculo es un camion
        } else if (vehiculo === 'camion' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined && ruedas != undefined) {
            //Se crea un nuevo camion con las propiedades pasadas por parametros
            const newCamion = new Camion(marca, motor, patente, titular, modelo, ruedas, estado);
            //Se agrega al array de camiones
            this.vehiculos.push(newCamion);
            //Si no es ninguno de esos tipos de vehiculos o si alguna propiedad no es pasada por parametro se le pide al usuario que ingrese los datos correctamente
        } else {
            console.log('El tipo de vehiculo es invalido, por favor, ingrese uno de los siguientes tipos: "auto", "moto" o "camion" y vuelva a intentarlo');   
        }
    }

    //modificar un vehiculo
    modVehiculo(marca: string, motor: string, patente: string, titular: string, modelo: number) {
        //buscar vehiculo por su patente
        const vehiculo = this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
        //si existe el vehiculo con la patente indicada
        if(vehiculo) {
            //modificar los atributos
            vehiculo.setMarca(marca);
            vehiculo.setMotor(motor);
            vehiculo.setTitular(titular);
            vehiculo.setModelo(modelo);
        } else {
            console.log('Vehiculo no encontrado');
        }
    }

    //eliminar un vehiculo por su patente
    removeVehiculo(patente: string) {
        const index = this.vehiculos.findIndex(v => v.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("Vehículo no encontrado.");
        }
    }
}