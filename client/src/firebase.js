import firebase from "firebase";
// import dotenv from "dotenv";
// dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyCo0dBSwdNEFbxYUNdnpViL4zZmuupCBI8",
    authDomain: "netflix-bb36a.firebaseapp.com",
    projectId: "netflix-bb36a",
    storageBucket: "netflix-bb36a.appspot.com",
    messagingSenderId: "383554497186",
    appId: "1:383554497186:web:0e8feebf60bb31c42a85fb",
    measurementId: "G-P7KMXVTHY1"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;