import {createStore , compose, applyMiddleware} from "redux"
import ContactReducer from "../REDUCERS/ContactReducer"
import {getFirebase, reactReduxFirebase,} from "react-redux-firebase"
import {getFirestore, reduxFirestore} from "redux-firestore"
import thunk from "redux-thunk"
import firebase from "../FIREBASE/Config"


const Store = createStore(ContactReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)

    ))

export default Store