import firebase from 'firebase';

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABAS_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.SENDER_ID
  };
  firebase.initializeApp(config);

} catch(e) {
  console.log('Cannot connect to Database: Please check error message', e)
}

export var dbRef = firebase.database().ref();
export default firebase;