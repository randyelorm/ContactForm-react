import React from 'react';
import { Route, BrowserRouter} from "react-router-dom";
import Signup from '../Components/SIGNUP-FORM/SignUP';
import Login from "../Components/LOGIN/Login"
import HomePage from "../Components/HomePage";
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (          
    <BrowserRouter>
       <PrivateRoute  exact path ="/" component= {HomePage} />
        <Route path = "/Signup" component ={Signup} />
        <Route path = "/Login" component = {Login} />
    </BrowserRouter>    
    );
}
export default Router;
