import database from '../FirebaseConfig';

var Automoviles = database.database().ref("Venta Automoviles/");

export default Automoviles;