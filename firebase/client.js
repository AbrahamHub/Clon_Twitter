import firebase from 'firebase/app'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVN-XdfqFR-l8JfRhkyygqx7i4caGvIWU",
  authDomain: "clon-twitter-78952.firebaseapp.com",
  projectId: "clon-twitter-78952",
  storageBucket: "clon-twitter-78952.appspot.com",
  messagingSenderId: "268485541278",
  appId: "1:268485541278:web:191b3766f3aa9f40b7ea8f",
  measurementId: "G-PERT1B8DG8"
};
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const loginWithTwitter = () => {
  const twitterProvider = new firebase.auth.TwitterAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(twitterProvider)
}
export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}