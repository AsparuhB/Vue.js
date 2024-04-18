import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCfwobyZgXsK2SdAqUVwkZJGmoDdYpsXv0',
  authDomain: 'noteballs-a9ef4.firebaseapp.com',
  projectId: 'noteballs-a9ef4',
  storageBucket: 'noteballs-a9ef4.appspot.com',
  messagingSenderId: '421880306006',
  appId: '1:421880306006:web:16c4179d426b3f07449ef7',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
