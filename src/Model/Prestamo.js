import database from '../FirebaseConfig';

var Prestamo = database.database().ref("Prestamo/");

export default Prestamo;