import firebase from 'firebase/firebase-browser';

try {
    const config = {
        apiKey: "AIzaSyDoV0uiLGGB4a3DHtmTpiSRmAKJa7VH_cw",
        authDomain: "todoapp-353ab.firebaseapp.com",
        databaseURL: "https://todoapp-353ab.firebaseio.com",
        projectId: "todoapp-353ab",
        storageBucket: "todoapp-353ab.appspot.com",
        messagingSenderId: "651612257865"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}
export let firebaseRef = firebase.database().ref();
export default firebase;