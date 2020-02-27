import database from '../FirebaseConfig';

var Medicos = database.database().ref("Servicios Medicos/");

export default Medicos;