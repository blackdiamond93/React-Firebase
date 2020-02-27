import database from '../FirebaseConfig';

var Tienda = database.database().ref("Tienda de variedades/");

export default Tienda;