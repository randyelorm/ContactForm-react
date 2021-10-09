
import React, {useState} from 'react';
import "./Contacts.css"
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { DeleteContact} from "../../ACTIONS/contactActions"
import Modal from 'react-bootstrap/Modal';
import EditForm from "../EDITCONTACT/EditForm"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



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

   

        <div className = "contact-box">
          {/* <h4 style = {{color: update_top_text.color}} >{update_top_text.text}</h4> */}

          <Card style={{ width: '18rem' }} className ="card">
        <ListGroup variant="flush">
        <ListGroup.Item>Name: <span className = "contact-info">{each_contact.name}  </span> </ListGroup.Item>
        <ListGroup.Item>Email: <span className = "contact-info">{each_contact.number}</span> </ListGroup.Item>
        <ListGroup.Item>Contact: <span className = "contact-info">{each_contact.location} </span></ListGroup.Item>
  
        <ListGroup.Item>   
            <Button variant="primary" onClick={handleShow}>Edit <i class="fas fa-edit"></i></Button>{' '} 
           <Button variant="secondary" onClick ={handleDelete}>Delete <i class="far fa-trash-alt"></i></Button>{' '}
          </ListGroup.Item>
        </ListGroup>
      </Card>
  

        </div>
        </>
    );
}

const mapDispatchToProps = {
  
  DeleteContact: DeleteContact

}


export default connect(null, mapDispatchToProps)(Contacts);

