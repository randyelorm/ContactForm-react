import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signup_gif from "../../Images/contact.gif"
import google_icon from "../../Images/google-logo.png"
import { EmailSignUp, GoogleLogin } from "../../ACTIONS/authAction"
import { Link } from "react-router-dom";


import { connect } from 'react-redux';
import "./SignUP.css"



const SignUp = (props) => {

  if(!props.auth.isLoaded) return null 
  if(props.auth.uid) props.history.push("/")

   const handleSubmit = (e)=> {
        e.preventDefault()
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value
        props.EmailSignUp(email, password)
       
    }
   

    return (
        <>
 <div className = "SignUp-Container">
            <Form className = "log-in-form" onSubmit = {handleSubmit}>
          
            <h2 > Welcome to Contacts. Please <span className ="Sign_Up">Sign UP</span> </h2> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className = "label-text">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name = "email" className = "Sign-up-form-input" required = "required" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className = "label-text">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name = "password" className = "Sign-up-form-input" required = "required"  />
            </Form.Group>
           
     
          <Button variant="primary" className = "" type="submit">
               Sign Up <i class="fas fa-user-plus"></i > 
        </Button>
            <br/>
            <br/>
            <Button  className = "google-btn" onClick = {props.GoogleLogin}>
            <img src={google_icon} className ="userForm-input"  className = "google-logo" alt="" /> Or Sign Up Google
            </Button>
            <br/>
            <br/>

        <h4>Already have an account?</h4>
          <Link to ="/Login">
          <Button variant="primary" className = "login-btn"> Login  <i class="fas fa-sign-in-alt"></i></Button>   
          </Link> 
         </Form>

            <img src={Signup_gif} className = "SignUp-img" alt="" />
            
  </div>
        </>
    );
}

const mapStateToProps = (state)=> {
    return {
      auth:state.firebase.auth
    }
  }
  

const mapDispatchToProps = {
    EmailSignUp : EmailSignUp,
    GoogleLogin : GoogleLogin
}


export default  connect(mapStateToProps, mapDispatchToProps)(SignUp);
