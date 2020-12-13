import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCNKRqo71xWw89kQBXt46jlZ2EVzKJsgmI',
  authDomain: 'react-first-982d5.firebaseapp.com',
  databaseURL: 'https://react-first-982d5-default-rtdb.firebaseio.com',
  projectId: 'react-first-982d5',
  storageBucket: 'react-first-982d5.appspot.com',
  messagingSenderId: '572260985460',
  appId: '1:572260985460:web:d941c8ec10850563a9ff21',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
