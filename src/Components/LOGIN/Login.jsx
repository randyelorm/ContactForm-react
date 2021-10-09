import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signup_gif from "../../Images/login.gif"
import google_icon from "../../Images/google-logo.png"
import { LoginWithEmail, GoogleLogin } from "../../ACTIONS/authAction"

import "./login.css"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
 
// import "./SignUP.css"



const Login = (props) => {


  if(!props.auth.isLoaded) return null
  if(props.auth.uid)props.history.push("/")

   const handleSubmit = (e)=> {
        e.preventDefault()
        let email = e.target.elements.email.value
        let password = e.target.elements.password.value
        props.LoginWithEmail(email, password)
      
        
       
    }
   

    return (
        <>
 <div className = "Login-Container">

     <img src={Signup_gif} className = "Login-img" alt="" />

            <Form className = "log-in-form" onSubmit = {handleSubmit}>
          
            <h2 > Welcome to Contacts. Please <span className ="Login">LOGIN</span> </h2> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className = "label-text">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter E-mail" name = "email" className = "Login-form-input" required = "required" />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className = "label-text">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" name = "password" className = "Login-form-input" required = "required"  />
            </Form.Group>
           
     
          <Button variant="primary" className = "login-btn" type="submit">
               LOGIN <i class="fas fa-sign-in-alt"></i>
        </Button>
          <br />
            <Button  className = "google-btn" onClick = {props.GoogleLogin}>
            <img src={google_icon} className ="userForm-input"  className = "google-logo" alt="" /> Or Login With Google
            </Button>
            <br/>
            <br/>

        <h4>Dont Have an account?</h4>
          <Link to = "/Signup">
          <Button variant="primary" className = "signup-btn"> SignUp <i class="fas fa-user-plus"></i > </Button>  
          </Link>  
         </Form>


            
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
 
  LoginWithEmail: LoginWithEmail,
  GoogleLogin:GoogleLogin
}


export default  connect(mapStateToProps, mapDispatchToProps)(Login);
