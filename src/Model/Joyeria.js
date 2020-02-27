import database from '../FirebaseConfig';

var Joyerias = database.database().ref("Joyeria/");

export default Joyerias;