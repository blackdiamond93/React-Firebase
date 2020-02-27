import database from '../FirebaseConfig';

var Restaurantes = database.database().ref("Restaurantes/");

export default Restaurantes;