var firebase = require('firebase/app');
require('firebase/database');
require('firebase/storage');
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyAlPX-GIiujR5KnUC4Cf-xTljgRkXBHmcM",
    authDomain: "blackdiamond-e279c.firebaseapp.com",
    databaseURL: "https://blackdiamond-e279c.firebaseio.com",
    projectId: "blackdiamond-e279c",
    storageBucket:'gs://blackdiamond-e279c.appspot.com'
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
 /* database.on("value",function(data){
    var Categoria = data.val();
    console.log(Categoria);
});
*/


  export default firebase;

