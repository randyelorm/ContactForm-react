import {createStore , compose, applyMiddleware, combineReducers} from "redux"
import ContactReducer from "../REDUCERS/ContactReducer"
import {firebaseReducer, getFirebase, reactReduxFirebase,} from "react-redux-firebase"
import {getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from "../FIREBASE/Config"

let reducers = combineReducers({
  contactReducer : ContactReducer,
   firebase: firebaseReducer,
})


const Store = createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)

    ))

export default Store


// What is react-redux-firebase and redux firestore and why are we installing them and the stuff they come with like
// getfirebase, reactReduxFirebase etc.
// Explanation for compose


//Redux is a state mangagment system we are using. Firebase has its own state so the react-redux-firebase and redux
// firestore helps sync what you have locally to the firebase state on their system.


// 