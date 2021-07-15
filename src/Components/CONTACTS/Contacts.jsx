
import React from 'react';
import "./Contacts.css"
import Button from 'react-bootstrap/Button';


const Contacts = ({each_contact, deleteContact }) => {

    const handleDelete = (event) => {
        deleteContact(each_contact.id)
    }

    return (
        <div className = "contact-box">
          <h4 className ="new-text">New Contact Added</h4>
          <h1>{each_contact.name} </h1> 
          <h2>{each_contact.number}</h2>
          <h3>{each_contact.location}</h3> <br />
          <Button variant="secondary" onClick = {handleDelete} > <i class="fas fa-trash-alt"></i> Delete Contact</Button>{' '}
          <Button variant="primary" > <i class="fas fa-user-edit"></i>  Edit Contact</Button>{' '}

        </div>
    );
}

export default Contacts;

