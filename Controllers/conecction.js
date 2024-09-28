import { 
  initializeApp 
}  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'


import { 
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail, 
  sendEmailVerification   
    
}  from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyDzwK22SK-F40bSzUIOfdA4INjdoJYuC0Q",
  authDomain: "project-2024b.firebaseapp.com",
  projectId: "project-2024b",
  storageBucket: "project-2024b.appspot.com",
  messagingSenderId: "868773381418",
  appId: "1:868773381418:web:d17cdfbc4452fb63ed8a53",
  measurementId: "G-1L1PN4FD5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//metodo de autenticacion de usuario
export const accessuser=(email,password)=>
  signInWithEmailAndPassword(auth, email, password)

//Verificación de logeo
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) { 
      const uid = user.uid;
      console.log("usuario: "+uid)
    } else {
      window.location.href="../index.html"
    }
  });
}

//Cerrar sesión
export const logout=()=>signOut(auth)

//registrar usuario nuevo
export const createuser=(email, password)=>
  createUserWithEmailAndPassword(auth, email, password)

//Email de verificacion
export const everification=()=>
  sendEmailVerification(auth.currentUser)

//Recuperar contraseña
export const recover=(email)=>
  sendPasswordResetEmail(auth, email);
  


