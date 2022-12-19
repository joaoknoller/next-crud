import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJETC_ID
    });
}

export default firebase;