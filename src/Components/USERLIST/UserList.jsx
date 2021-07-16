import React from 'react';
import Contacts from '../CONTACTS/Contacts';

const UserList = ({Contacts_in_App_state, selected_id, editContact}) => {

        const userList = Contacts_in_App_state.map (
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

export default UserList;
