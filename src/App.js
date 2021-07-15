

import React, { Component } from 'react';

import ContactsForm from "./Components/CONTACTSFORM/ContactsForm"
import UserList from './UserList';

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
        newUser.id = Math.random.toString()
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


  render() {


    return (
      <center>
        <ContactsForm addUser ={this.handleAddContact}/>
        <UserList Contacts_in_App_state = {this.state.contacts} selected_id = {this.handleDelete} />
        <br/>
   
      </center>
    );
  }
}

export default App;

