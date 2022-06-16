import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWuRCIoHG2S68c2bimEiJk-mmc4hn3HPc",
    authDomain: "veggie-start-tool.firebaseapp.com",
    databaseURL: "https://veggie-start-tool-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "veggie-start-tool",
    storageBucket: "veggie-start-tool.appspot.com",
    messagingSenderId: "714589217901",
    appId: "1:714589217901:web:0b4607041ed7a570a84b64"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  const database = getDatabase(app);
 


  export {database};
