


export const addContact =(contact)=> {
    contact.id = Math.random().toString()
    return {
        type: "ADD_CONTACT",
        payload: contact
    }

}