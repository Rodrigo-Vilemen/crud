import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD_uJ_pSIcepnBpzIKTd5KZz_K0-9NAKlg",
    authDomain: "crud-4a417.firebaseapp.com",
    projectId: "crud-4a417",
    storageBucket: "crud-4a417.appspot.com",
    messagingSenderId: "1066482697382",
    appId: "1:1066482697382:web:9c3f37ca3a806c6f87a067",
    measurementId: "G-XM9J775CX8"
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();