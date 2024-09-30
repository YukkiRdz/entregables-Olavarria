import { RegistroAutomor } from "./RegistroAutomotor";

//Crear registro automotor
const registroAutomor = new RegistroAutomor('RAO');

//Registrar vehiculo
registroAutomor.addVehicle('auto', 'Ford', 'Nafta', 'ABC123', 'Thiago', 1997);
registroAutomor.addVehicle('auto', 'Chevrolet', 'Nafta', 'DEF123', 'Thiago', 1993);
registroAutomor.addVehicle('moto', 'Honda', 'Nafta', 'GHI123' ,'Thiago', 2005);
registroAutomor.addVehicle('camion', 'Ford', 'Gasoil', 'JKL123','Thiago', 2014);

//mostrar vehiculos registrados
console.log("Vehiculos registrados en 'RAO': ");
console.log(registroAutomor.getAuto(), registroAutomor.getMoto(), registroAutomor.getCamion());

//modificar un vehiculo
registroAutomor.modVehicle('auto', 'ABC123', 'Nafta' ,'Fiat', 'MNO123', 'Thiago', 2005);
console.log("Vehiculos luego de la modificacion en 'RAO': ");
console.log(registroAutomor.getAuto(), registroAutomor.getMoto(), registroAutomor.getCamion());

//Dar de baja el vehiculo
registroAutomor.removeVehicle('auto', 'MNO123'); //debo modificar las propiedades del objeto en el metodo modVehicle y no crear un nuevo array para que removeVehicle los encuentre
console.log('Vehiculos luego de eliminar uno');
console.log(registroAutomor.getAuto(), registroAutomor.getMoto(), registroAutomor.getCamion());