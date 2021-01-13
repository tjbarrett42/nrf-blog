import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC5fNyufnkTGUYkQ5jlOWDg-q_7XeRuQbI",
    authDomain: "nrf-blog.firebaseapp.com",
    projectId: "nrf-blog",
    storageBucket: "nrf-blog.appspot.com",
    messagingSenderId: "157493416019",
    appId: "1:157493416019:web:935108b54331c4348576a6",
    measurementId: "G-MVW4Y0C3GL"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;