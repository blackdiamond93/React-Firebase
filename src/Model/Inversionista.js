import database from '../FirebaseConfig';

var Inversionista = database.database().ref("Inversionista/");

export default Inversionista;