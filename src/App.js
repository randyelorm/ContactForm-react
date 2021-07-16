

import React, { Component } from 'react';

import ContactsForm from "./Components/CONTACTSFORM/ContactsForm"
import UserList from './Components/USERLIST/UserList';

class App extends Component {
  constructor (props) {
        super (props)

        this.state = {

           contacts : [

                    // {
                    //   name: "Randy",
                    //   number: 508574901,
                    //   location: "Legon"
                    // },

                    // {
                    //   name: "Elorm",
                    //   number: 2445721447,
                    //   location: "Tesano"
                    // },

                    // {
                    //   name: "Davoh",
                    //   number: 2649621247,
                    //   location: "Tesano"
                    // },



                ]
        }
  }


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
        <UserList Contacts_in_App_state = {this.state.contacts} selected_id = {this.handleDelete} editContact = {this.handleEdit}/>
        <br/>
   
      </center>
    );
  }
}

export default App;

