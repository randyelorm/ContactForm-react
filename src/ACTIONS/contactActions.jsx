


export const addContact =(contact)=> {
    contact.id = Math.random().toString()
    // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // }

    return(dispatch, state, {getFirestore})=>{

        getFirestore().collection("contact").add(contact).then(
            (docs)=> {
               console.log(docs)
            
            }
        ) }


}


export const EditContact = (contact_id, updatedContact)=> {
    updatedContact.id = Math.random().toString()

    return {
        type: "EDIT_CONTACT",
        contact_id : contact_id,
        updatedContact : updatedContact
        
    }
}


export const DeleteContact = (id) => {
    
    return {
        type: "DELETE_CONTACT",
         payload: id
      }
   
    
}


export const getAllContacts = ()=> {
    return(dispatch, state, {getFirestore})=> {
        getFirestore().collection("contact").onSnapshot(
            (snapshot)=>{
                let contacts = []
                snapshot.forEach(
                    (doc)=> {
                        contacts.push(doc.data())
                    }

                )

                
                dispatch(
                    {
                        type: "SET_ALL_CONTACTS",
                        payload: contacts
                    }
                )

            }

           


        )

    }


}



