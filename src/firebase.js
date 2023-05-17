import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyBEgVolmLkhae34qPPW256fvKlVBKskawc",
  authDomain: "chatapp-clone-51ec7.firebaseapp.com",
  projectId: "chatapp-clone-51ec7",
  storageBucket: "chatapp-clone-51ec7.appspot.com",
  messagingSenderId: "441479288036",
  appId: "1:441479288036:web:67337eeeb77a57e0ca08f1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// DB connection 
const db=firebaseApp.firestore();
export const auth = firebase.auth();

export default db;