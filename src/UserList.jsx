import React from 'react';
import Contacts from './Components/CONTACTS/Contacts';

const UserList = ({Contacts_in_App_state, selected_id}) => {

        const userList = Contacts_in_App_state.map (
                (each_contact_in_App_state)=> {
                    return <Contacts 
                            each_contact = {each_contact_in_App_state}  
                            deleteContact = {selected_id}
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
