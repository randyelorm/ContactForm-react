
import React, {useState} from 'react';
import "./Contacts.css"
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { DeleteContact} from "../../ACTIONS/contactActions"
import Modal from 'react-bootstrap/Modal';
import EditForm from "../EDITCONTACT/EditForm"


const Contacts = ({each_contact, DeleteContact, editContact }) => {

    const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);



  


    const handleDelete = (event) => {
        DeleteContact(each_contact.id)
      
        
        
    }

    const [update_top_text, setUpdate_top] = useState({
          text: "New Contact added",
          color: "green",
          
    })


    const Update_Top = (event)=> {
      setUpdate_top({
        text: "Contact Edited Successfully.",
        color:"purple",
     
      })
      
    }

    
 

    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <EditForm each_contact = {each_contact} editContact = {editContact}  closeModal = {handleClose} update_top = {Update_Top}/>
        
        </Modal.Body>
        
      </Modal>

      {/* <Modal show={showdelete.showmodal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
            
        Contact Deleted Successfully

        </Modal.Body>
        
      </Modal> */}

        <div className = "contact-box">
          <h4 style = {{color: update_top_text.color}} >{update_top_text.text}</h4>
         
          <h1>{each_contact.name} </h1> 
          <h2>{each_contact.number}</h2>
          <h3>{each_contact.location}</h3> <br />
          <Button variant="secondary" onClick = {handleDelete} > <i class="fas fa-trash-alt"></i> Delete Contact</Button>{' '}
          <Button variant="primary" onClick = {handleShow} > <i class="fas fa-user-edit"></i>  Edit Contact</Button>{' '}
          <hr/>

        </div>
        </>
    );
}

const mapDispatchToProps = {
  
  DeleteContact: DeleteContact

}


export default connect(null, mapDispatchToProps)(Contacts);

