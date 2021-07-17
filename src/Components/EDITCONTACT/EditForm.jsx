import React, { Component } from 'react';
import "./edit.css"
import Button from 'react-bootstrap/Button';

class EditForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
            name : props.each_contact.name,
            number : props.each_contact.number,
            location: props.each_contact.location,
            id: props.each_contact.id,
            text: "Type In Your Changes",
            disabled: true
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            disabled: false,
            text: "Update Changes"
           
            
        })
        
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        this.props.editContact(this.state.id, this.state)
        this.setState({
            name : "",
            number : "",
            location: "",
        })
        
        this.props.closeModal()
      
        
    }


    render() {
        return (
            <form onSubmit = {this.handleSubmit} className ="edit-form-box">
              
               <label htmlFor="name"> 
                   <h3>Name </h3>
                   <input 
                   type="text" 
                   name = "name" 
                   value = {this.state.name} 
                   onChange ={this.handleChange}
                   placeholder ="Enter New Name"
                   required = "required"
                   />
               </label>

               <label htmlFor="number"> 
                   <h3>Number</h3> 
                   <input 
                   type="number" 
                   name = "number" 
                   value = {this.state.number}  
                   onChange ={this.handleChange}
                   placeholder= "Enter New Number" 
                   required = "required"
                   
                   />
               </label>

               <label htmlFor="location"> 
                  <h3>Location</h3> 
                   <input 
                   type="text" 
                   name = "location" 
                   value = {this.state.location}  
                   onChange ={this.handleChange} 
                   placeholder = "Enter New Location"
                   required = "required"
                   
                   />
               </label>

               <button className ="submit-btn" onClick = {this.props.update_top} disabled = {this.state.disabled} type= "submit"> {this.state.text} </button>
            </form>
        );
    }
}

export default EditForm;
