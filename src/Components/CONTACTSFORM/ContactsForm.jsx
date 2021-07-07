import React, { Component } from 'react';
import "./Form.css"

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
        console.log("form-submitted")
        this.props.addUser(this.state)
        this.setState({
            name : "",
            number : "",
            location: "",
        })
        
        event.preventDefault()
      
        
    }


    render() {
        return (
            <form onSubmit = {this.handleSubmit} className ="form-box">
                <h1>Add a New Contact</h1>
               <label htmlFor="name"> 
                   <h3>Name </h3>
                   <input 
                   type="text" 
                   name = "name" 
                   value = {this.state.name} 
                   onChange ={this.handleChange}
                   placeholder ="Enter Your Name"
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
                   placeholder= "Enter Your Number" 
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
                   placeholder = "Enter Your Location"
                   required = "required"
                   
                   />
               </label>

               <input className ="submit-btn" type= "submit" />
            </form>
        );
    }
}

export default ContactsForm;
