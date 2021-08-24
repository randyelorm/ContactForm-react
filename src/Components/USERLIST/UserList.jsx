import React from 'react';
import Contacts from '../CONTACTS/Contacts';
import { connect } from 'react-redux';

const UserList = ({contacts, selected_id, editContact}) => {

        const userList = contacts.map (
                (each_contact_in_App_state)=> {
                    return <Contacts 
                            each_contact = {each_contact_in_App_state}  
                            deleteContact = {selected_id}
                            editContact = {editContact}
                            />
                }
        )


    return (
        <div>
           {userList} 
        </div>
    );
}

 const mapStateToProps=(state)=> {
    console.log(state.contacts)
    // Where is the state from? and how did it connect to the userlist
     return {
        contacts: state.contacts
    
     }
     
 }



export default connect (mapStateToProps)(UserList) ;
