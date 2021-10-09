import React, { Component } from 'react';
import "./Form.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { addContact, getAllContacts } from "../../ACTIONS/contactActions"
import { Logout } from "../../ACTIONS/authAction"


class ContactsForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
            name : "",
            number : "",
            location: "",
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event)=> {
     
        this.props.addNewContact(this.state)
        this.setState({
            name : "",
            number : "",
            location: "",
        })
        
        event.preventDefault()
      
        
    }

    componentDidMount(){
        this.props.getAllContacts()
    }


    render() {
        return (
            <>
               <Button variant="danger" className = "logout-btn"  onClick = {this.props.Logout}>
                 Logout <i class="fas fa-reply"></i>
           </Button>
             <Form onSubmit = {this.handleSubmit} className ="form-box">
          <div className = "title-nd-logout-div">
             <h1>Add a New Contact</h1>
           
           </div>   
        
          <Form.Group className="form-group" controlId="formBasicEmail">
              <Form.Label className = "label-text"> <h3>Name</h3> </Form.Label>
              <Form.Control 
              type="text" 
              placeholder="Enter Name" 
              name = "name" 
              className = "contact-form-input" 
              required = "required" 
              value = {this.state.name} 
              onChange ={this.handleChange}
              />
             
          </Form.Group>

          <Form.Group className=" form-group" controlId="formBasicEmail">
              <Form.Label className = "label-text"><h3>Number</h3> </Form.Label>
              <Form.Control 
              type="number" 
              placeholder="Enter Number" 
              name = "number" 
              className = "contact-form-input" 
              required = "required" 
              value = {this.state.number} 
              onChange ={this.handleChange}
              />
             
          </Form.Group>

          <Form.Group className="mb-3 form-group" controlId="">
              <Form.Label className = "label-text"><h3>Location</h3> </Form.Label>
              <Form.Control 
               type="text" 
                placeholder="Enter Location"
               name = "location" 
               className = "contact-form-input" 
               required = "required" 
               value = {this.state.location} 
               onChange ={this.handleChange}
               
               />
         <Button variant="primary" className = "submit-btn" type="submit">
             Submit <i class="fas fa-user-plus"></i > 
        </Button>
     <br />
       
          </Form.Group>
         
   
     

      <br />
     
      
   
 
       </Form>

    
    
            </>
        );
    }
}

const mapDispatchToProps = {
        addNewContact: addContact,
        getAllContacts: getAllContacts,
        Logout:Logout
}



export default connect(null, mapDispatchToProps)(ContactsForm);
