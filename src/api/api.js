import * as firebase from 'firebase'
import config from './config'
firebase.initializeApp(config)
export default {
  logUserIn: (userInfo) => {
    return firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
  },
  currentUser: () => {
    return firebase.auth().currentUser
  },
  onAuthStateChanged: () => {
    return firebase.auth().onAuthStateChanged.bind(firebase.auth())
  }

}
