import {createStore} from "redux"
import ContactReducer from "../REDUCERS/ContactReducer"

const Store = createStore(ContactReducer)

export default Store