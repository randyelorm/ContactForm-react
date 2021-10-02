

import React, { Component } from 'react';

import ContactsForm from "./Components/CONTACTSFORM/ContactsForm"
import UserList from './Components/USERLIST/UserList';

class App extends Component {
 

  render() {


    return (
      <center>
        <ContactsForm/>
        <UserList/>
        <br/>
   
      </center>
    );
  }
}

export default App;

