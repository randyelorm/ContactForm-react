

import React, { Component } from 'react';

import ContactsForm from "./Components/CONTACTSFORM/ContactsForm"
import UserList from './Components/USERLIST/UserList';

class App extends Component {
 


  handleAddContact = (newUser) => {
        newUser.id = Math.random().toString()
      
        this.setState({
          contacts: [...this.state.contacts, newUser]
        })
  }

  handleDelete = (selected_contact_id)=> {
      let notDeletedContacts =  this.state.contacts.filter(
            (each_contact_id_in_array)=> {
                return each_contact_id_in_array.id !== selected_contact_id
                
            })
          this.setState({
          contacts: notDeletedContacts
        })
  }

  handleEdit = (selected_contact_id, Updated_contact_form) => {

      this.setState({
        contacts: this.state.contacts.map(
          (each_contact)=> {
             return each_contact.id === selected_contact_id ? Updated_contact_form : each_contact
          }
        )
      })
  }


  render() {


    return (
      <center>
        <ContactsForm addUser ={this.handleAddContact}/>
        <UserList/>
        <br/>
   
      </center>
    );
  }
}

export default App;

