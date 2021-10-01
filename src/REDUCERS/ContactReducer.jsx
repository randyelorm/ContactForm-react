const intialState = {
    contacts: [],
 
}


const ContactReducer = (state = intialState, action)=> {

    switch (action.type) {
        case "ADD_CONTACT":
            return {...state.contacts, contacts:[...state.contacts, action.payload]}

            case "EDIT_CONTACT":
              
                const updatedContact = state.contacts.map (
                    (each_contact)=> {
                          if (each_contact.id === action.contact_id) {
                              return {...each_contact, ...action.updatedContact}
                          } else {
                              return each_contact
                          }
                    }
                ) 
                   return {...state, contacts: updatedContact}

                  

            case "DELETE_CONTACT":
                let notDeletedContacts = state.contacts.filter(
                    (each_item_in_array)=> {
                        return each_item_in_array.id !== action.payload
                    })
        
                    return {contacts: notDeletedContacts }

            case "SET_ALL_CONTACTS":
                return {...state, contacts: action.payload}
        
        default: 
        return state
    }

}

export default ContactReducer


// What is the difference between the add new contact spread and the set and edit new contact
// spread.