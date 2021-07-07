

import React, { Component } from 'react';
import Contacts from './Components/CONTACTS/Contacts';
import ContactsForm from "./Components/CONTACTSFORM/ContactsForm"

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
        this.setState({
          contacts: [...this.state.contacts, newUser]
        })
  }


  render() {


    return (
      <center>
        <ContactsForm addUser ={this.handleAddContact}/>
        <br/>
        {

          this.state.contacts.map(
            (contact,index)=> {
              return(
                <div>
                <Contacts key ={index} name ={contact.name} number ={contact.number} location = {contact.location}/>
                
               </div>
              )
            }
          )


        }
      </center>
    );
  }
}

export default App;

