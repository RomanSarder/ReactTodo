import firebase from 'firebase/firebase-browser';
try {
    const config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: "todoapp-353ab",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "651612257865"
    };
    console.log(config);
    firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}
export let firebaseRef = firebase.database().ref();
export default firebase;