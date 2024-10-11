import { RegistroAutomor } from "./RegistroAutomotor";

//Crear registro automotor
const registroAutomor = new RegistroAutomor('RAO');

//Registrar vehiculo
registroAutomor.addVehiculo('auto', 'Ford', 'Nafta', 'ABC123', 'Thiago', 1997, true);
registroAutomor.addVehiculo('auto', 'Chevrolet', 'Nafta', 'DEF123', 'Thiago', 1993, true);
registroAutomor.addVehiculo('moto', 'Honda', 'Nafta', 'GHI123' ,'Thiago', 2005, true);
registroAutomor.addVehiculo('camion', 'Ford', 'Gasoil', 'JKL123','Thiago', 2014, true, 6);

//mostrar vehiculos registrados
console.log("Vehiculos registrados en 'RAO': ");
console.log(registroAutomor.getVehiculos());

//modificar un vehiculo
registroAutomor.modVehiculo('Fiat', 'Nafta', 'ABC123', 'Thiago', 2005);
console.log("Vehiculos luego de la modificacion en 'RAO': ");
console.log(registroAutomor.getVehiculos());

//Dar de baja el vehiculo
registroAutomor.removeVehiculo('DEF123');
console.log('Vehiculos luego de eliminar uno');
console.log(registroAutomor.getVehiculos());