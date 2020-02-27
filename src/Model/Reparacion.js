import database from '../FirebaseConfig';

var Reparacions = database.database().ref("Servicios de Reparacion/");

export default Reparacions;