import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyC-nnc36HFOjLovex3creu-nGYj2FQOc7I",
    authDomain: "restaurant-119da.firebaseapp.com",
    databaseURL: "https://restaurant-119da-default-rtdb.firebaseio.com",
    projectId: "restaurant-119da",
    storageBucket: "restaurant-119da.appspot.com",
    messagingSenderId: "668410190590",
    appId: "1:668410190590:web:df0e2bb583823ccf07e3af"
  };


  const app=getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore=getFirestore(app)
  const storage=getStorage(app)

  export {app,firestore,storage};
