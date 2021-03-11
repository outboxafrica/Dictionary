import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDATumRDpysyB3xadw_sQm57eLcBMug3xk',
	authDomain: 'eduonline-57029.firebaseapp.com',
	projectId: 'eduonline-57029',
	storageBucket: 'eduonline-57029.appspot.com',
	messagingSenderId: '957063257808',
	appId: '1:957063257808:web:e71d3c1578bf37287508d5',
	measurementId: 'G-306PEQ6SW9'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
