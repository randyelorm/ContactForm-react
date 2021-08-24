


export const addContact =(contact)=> {
    contact.id = Math.random().toString()
    return {
        type: "ADD_CONTACT",
        payload: contact
    }

}

export const EditContact = (updatedContact)=> {
    updatedContact.id = Math.random().toString()

    return {
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}


export const DeleteContact = (id) => {
    
    return {
        type: "DELETE_CONTACT",
         payload: id
      }
   
    
}

// How is action linked to the reducer?