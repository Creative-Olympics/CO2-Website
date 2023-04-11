import { credential, initializeApp } from 'firebase-admin';
import * as keyDoNotShare from '../../../credential.json'

const firebaseConfig = {
	apiKey: 'AIzaSyD8HzripA_M0tkPAZVRd6Rzyxt6Gd052Ls',
	authDomain: 'auth.rahmouni.dev',
	projectId: 'rahneil-n3-co',
	storageBucket: 'rahneil-n3-co.appspot.com',
	messagingSenderId: '924629805963',
	appId: '1:924629805963:web:87c4e0d86c8caf643c9d8e',
	measurementId: 'G-345HMCZEHS'
};

//@ts-ignore
export const adminApp = initializeApp({...firebaseConfig, credential: credential.cert(keyDoNotShare)}, "RahNeil_N3:FirebaseAdminApp:v2")
