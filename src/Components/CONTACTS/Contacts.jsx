import React, { Component } from 'react';
import "./Contacts.css"

class Contacts extends Component {
    render(props) {
        return (
            <div className ="contact-box">
                <p className ="new-text">New Contact Added</p>
                <h2>Name:  {this.props.name}</h2> 
                <h3>Number:  {this.props.number}</h3> 
                <h4>Location:  {this.props.location} </h4> 
                <hr/>
            </div>

        );
    }
}

export default Contacts;
