import React from 'react';
import Contacts from '../CONTACTS/Contacts';
import { connect } from 'react-redux';

const UserList = ({contacts, selected_id, editContact}) => {

        const userList = contacts.map (
                (each_contact)=> {
                    return <Contacts 
                            each_contact = {each_contact}  
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
  
     return {
        contacts: state.contacts
    
     }
     
 }



export default connect (mapStateToProps)(UserList) ;
