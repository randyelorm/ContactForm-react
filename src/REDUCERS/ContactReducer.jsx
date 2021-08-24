const intialState = {
    contacts: []
}


const ContactReducer = (state = intialState, action)=> {

    switch (action.type) {
        case "ADD_CONTACT":
            return {...state.contacts, contacts:[...state.contacts, action.payload]}

            case "EDIT_CONTACT":
                return {...state.contacts, contacts:[action.payload]}

            case "DELETE_CONTACT":
                let notDeletedContacts = state.contacts.filter(
                    (each_item_in_array)=> {
                        // console.log(each_item_in_array.id)
                        // console.log(action.payload)
                        // console.log(each_item_in_array.id !== action.payload) 
                        return each_item_in_array.id !== action.payload
                    })
        
                    return {contacts: notDeletedContacts }
        
        default: 
        return state
    }

}

export default ContactReducer


// How is the reducer linked to the action. 