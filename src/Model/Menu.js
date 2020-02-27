import database from '../FirebaseConfig';

var Categorias = database.database().ref("Categorias/");

export default Categorias;