import React from 'react';
import ContactsForm from "./CONTACTSFORM/ContactsForm";
import UserList from './USERLIST/UserList';

const Homepage = () => {
    return (
        <div>
            <ContactsForm/>
            <UserList/>
        </div>
    );
}

export default Homepage;
