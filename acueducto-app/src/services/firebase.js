import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCC_w4M5MYldnv45HoWYg51uL-RRD6QfGQ",
    authDomain: "acueducto-higueron.firebaseapp.com",
    databaseURL: "https://acueducto-higueron.firebaseio.com",
    projectId: "acueducto-higueron",
    storageBucket: "acueducto-higueron.appspot.com",
    messagingSenderId: "107886342653",
    appId: "1:107886342653:web:93e4f56df82e9d8926e994",
    measurementId: "G-BH85TM9LW8"
};

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();