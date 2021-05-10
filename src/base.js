import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
  apiKey: "AIzaSyD3bh3YNYg7QpXMzboTyFd2EkpHCRV4lkM",
  authDomain: "reactjs-recipes.firebaseapp.com",
  databaseURL: "https://reactjs-recipes-default-rtdb.firebaseio.com",
  projectId: "reactjs-recipes",
  storageBucket: "reactjs-recipes.appspot.com",
  messagingSenderId: "772351475720",
  appId: "1:772351475720:web:37cee4919ee5d33aa351bd"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base