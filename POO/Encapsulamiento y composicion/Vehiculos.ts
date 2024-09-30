import { Auto } from "./Autos";
import { Moto } from "./Motos";
import { Camion } from "./Camiones";

export class Vehiculo {
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    constructor(autos?: Auto[], motos?: Moto[], camiones?: Camion[]) {

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
            this.camiones =camiones;
        } else {
            this.camiones = [];
        }
    }

    getAuto(): Auto[] {
        return this.autos;
    }

    getMoto(): Moto[] {
        return this.motos;
    }

    getCamion(): Camion[] {
        return this.camiones;
    }

    // //retorno los objetos con los arrays correspondientes
    // getTipo() {
    //     return {autos: this.autos, motos: this.motos, camiones: this.camiones};
    // }
}