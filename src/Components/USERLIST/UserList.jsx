import React from 'react';
import Contacts from '../CONTACTS/Contacts';
import { connect } from 'react-redux';
import "./userlist.css"

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
        <div >
            <h3 className = "text-center">ALL CONTACTS</h3>
        <span className ="userList">{userList} </span>   
        </div>
    );
}

 const mapStateToProps=(state)=> { 
  
     return {
        contacts: state.contactReducer.contacts
    
     }
     
 }



export default connect (mapStateToProps)(UserList) ;
