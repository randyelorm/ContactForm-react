


export const addContact =(contact)=> {
    contact.id = Math.random().toString()
    // return {
    //     type: "ADD_CONTACT",
    //     payload: contact
    // }

    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection("contact")
        .add({...contact, timestamp:getFirestore().FieldValue.serverTimestamp()})
        .then(
            (docs)=> {
               console.log(docs)
            
            }
        ) }


}


export const EditContact = (contact_id, updatedContact)=> {
    updatedContact.id = Math.random().toString()

    // return {
    //     type: "EDIT_CONTACT",
    //     contact_id : contact_id,
    //     updatedContact : updatedContact
        
    // }
    return (dispatch, state, {getFirestore})=> {
        getFirestore().collection("contact").doc(contact_id).set(updatedContact) 
        .then(
            ()=> {
                console.log("Document updated Successfully")
            }
        )
        .catch(
            (error)=> {
                console.log("Error removing document")
            }
        )
    }
   


}


export const DeleteContact = (id) => {
    
      return (dispatch, state, {getFirestore})=> {
        getFirestore().collection("contact").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }



    //   return {
    //     type: "DELETE_CONTACT",
    //      payload: id
    //   }
    
}





export const getAllContacts = ()=> {
    return(dispatch, state, {getFirestore})=> {
        getFirestore().collection("contact").orderBy("timestamp", "desc")
        .onSnapshot(
            (snapshot)=>{
                let contacts = []
                snapshot.forEach(
                    (doc)=> {
                        contacts.push({...doc.data(), id:doc.id})  // Adding id from firebase that gets added when we add the contact
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



