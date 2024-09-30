import { Auto } from "./Autos";
import { Camion } from "./Camiones";
import { Moto } from "./Motos";

export class RegistroAutomor {
    private nombre: string;
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[]

    constructor(nombre: string, autos?: Auto[], motos?: Moto[], camiones?: Camion[]) {
        this.nombre = nombre;
        if (autos != undefined) {
            this.autos = autos;
        } else {
            this.autos = [];
        }
        if (motos != undefined) {
            this.motos = motos;
        } else {
            this.motos = [];
        }
        if (camiones != undefined) {
            this.camiones = camiones;
        } else {
            this.camiones = [];
        }
    }

    //obtener el nombre del registro automotor
    getNombre(): string {
        return this.nombre;
    }

    //obtener todos los vehiculos
    getAuto(): Auto[] {
        return this.autos;
    }
    
    getCamion(): Camion[] {
        return this.camiones;
    }

    getMoto(): Moto[] {
        return this.motos;
    }
    //agregar vehiculo
    //Propiedades de los vehiculos y su tipo como parametros
    // | indica que puede ser de uno o mas tipos
    addVehicle(vehiculo: 'auto' | 'moto' | 'camion', marca: string, motor: string, patente: string, titular: string, modelo: number): void {
        //Si el vehiculo es un auto
        if (vehiculo === 'auto' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined) {
            //Se crea un nuevo auto con las propiedades pasadas por parametros
            const newAuto = new Auto(marca, motor, patente, titular, modelo);
            //Se agrega al array de autos
            this.autos.push(newAuto);
            //Si el vehiculo es una moto
        } else if (vehiculo === 'moto' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined) {
            //Se crea una nueva moto con las propiedades pasadas por parametros
            const newMoto = new Moto(marca, motor, patente, titular, modelo);
            //Se agrega al array de motos
            this.motos.push(newMoto);
            //Si el vehiculo es un camion
        } else if (vehiculo === 'camion' && patente != undefined && marca != undefined && motor != undefined && titular != undefined && modelo != undefined) {
            //Se crea un nuevo camion con las propiedades pasadas por parametros
            const newCamion = new Camion(marca, motor, patente, titular, modelo);
            //Se agrega al array de camiones
            this.camiones.push(newCamion);
            //Si no es ninguno de esos tipos de vehiculos o si alguna propiedad no es pasada por parametro se le pide al usuario que ingrese los datos correctamente
        } else {
            console.log('El tipo de vehiculo es invalido, por favor, ingrese uno de los siguientes tipos: "auto", "moto" o "camion" y vuelva a intentarlo');   
        }
    }

    //modificar un vehiculo
    //Se le pasa el tipo y la patente del vehiculo a modificar como parametros para poder buscarlo dentro de los arrays, ademas se le pasan las nuevas propiedades 
    modVehicle(vehiculo: 'auto' | 'moto' | 'camion', patente: string, modMarca: string, modMotor: string, modPatente: string, modTitular: string, modModelo: number): void {
        //Buscar la patente segun en que tipo de vehiculo se desea modificar
        if (vehiculo === 'auto') {
                    //Buscar el vehículo en el array de autos
                    const indexAuto = this.autos.findIndex(auto => auto.getPatente() === patente);
                    //Si la patente fue encontrada, es decir no devuelve -1
                    if (indexAuto !== -1) {
                        // Modificar el auto registrado
                        this.autos[indexAuto] = new Auto(modMarca, modMotor, modPatente, modTitular, modModelo);
                    } else {
                        //Si la patente no fue encontrada, devuelve -1
                        console.log('Auto no encontrado.');
                    }
                } else if (vehiculo === 'moto') {
                    //Buscar el vehículo en el array de motos
                    const indexMoto = this.motos.findIndex(moto => moto.getPatente() === patente);
                    //Si la patente fue encontrada, es decir no devuelve -1
                    if (indexMoto !== -1) {
                        // Modificar la moto registrada
                        this.motos[indexMoto] = new Moto(modMarca, modMotor, modPatente, modTitular, modModelo);
                    } else {
                        //Si la patente no fue encontrada, devuelve -1
                        console.log('Moto no encontrada.');
                    }
                } else if (vehiculo === 'camion') {
                    //Buscar el vehículo en el array de camiones
                    const indexCamion = this.camiones.findIndex(camion => camion.getPatente() === patente);
                    //Si la patente fue encontrada, es decir no devuelve -1
                    if (indexCamion !== -1) {
                        // Modificar el camión registrado
                        this.camiones[indexCamion] = new Camion(modMarca, modMotor, modPatente, modTitular, modModelo);
                    } else {
                        //Si la patente no fue encontrada, devuelve -1
                        console.log('Camión no encontrado.');
                    }
                } else {
                    //Si el tipo del vehiculo es incorrecto
                    console.log('El tipo de vehiculo es invalido. Debe ser "auto", "moto" o "camion".');
                }
            }

    //dar de baja un vehiculo por su patente
    removeVehicle(vehiculo: 'auto' | 'moto' | 'camion', patente: string): void{
        //Buscar la patente dentro de los arrays de cada tipo de vehiculo
        let vehiculoEncontrado = false;
        if(vehiculo === 'auto'){
            const indexAutoAEliminar = this.autos.findIndex(auto => auto.getPatente() === patente);
            console.log(indexAutoAEliminar);
            if (indexAutoAEliminar !== -1) {
                this.autos.splice(indexAutoAEliminar, 1); //desde el indice indexAutoAEliminar elimina 1 elemento
                vehiculoEncontrado = true;
            } else {
                console.log('La patente del auto ingresada es incorrecta, por favor verifique y vuelva a intentarlo');
            }
        } else if(vehiculo === 'moto'){
            const indexMotoAEliminar = this.motos.findIndex(moto => moto.getPatente() === patente);
            if (indexMotoAEliminar !== -1) {
                this.motos.splice(indexMotoAEliminar, 1); //desde el indice indexMotoAEliminar elimina 1 elemento
                vehiculoEncontrado = true;
            } else {
                console.log('La patente de la moto ingresada es incorrecta, por favor verifique y vuelva a intentarlo');
            }
        } else if(vehiculo === 'camion'){
            const indexCamionAEliminar = this.camiones.findIndex(camion => camion.getPatente() === patente);
            if (indexCamionAEliminar !== -1) {
                this.camiones.splice(indexCamionAEliminar, 1); //desde el indice indexCamionAEliminar elimina 1 elemento
                vehiculoEncontrado = true;
            } else {
                console.log('La patente ingresada del camion es incorrecta, por favor verifique y vuelva a intentarlo');
            }
        }
        if (vehiculoEncontrado != true) {
            console.log(`El vehiculo con patente: ${patente} no ha sido encontrado.`);
        }
    }
}