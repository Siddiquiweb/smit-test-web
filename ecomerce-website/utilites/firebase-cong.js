import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {

    apiKey: "AIzaSyD3SXxeQXmib18MZvATfDEFjkMHBAb4UKM",
    authDomain: "web-app-c719f.firebaseapp.com",
    projectId: "web-app-c719f",
    storageBucket: "web-app-c719f.appspot.com",
    messagingSenderId: "822045578971",
    appId: "1:822045578971:web:3d3f0e70674424cf969efe"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    auth,
    onAuthStateChanged,
    db,
    createUserWithEmailAndPassword,
    addDoc,
    setDoc,
    doc,
    collection,
    signOut,
    signInWithEmailAndPassword,
    getDoc,
    storage,
    ref,
    getDownloadURL,
    uploadBytes,
    getDocs
};