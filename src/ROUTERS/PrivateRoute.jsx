
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  if (!auth.isLoaded) return <h1>Loading page</h1>  
 
  if (auth.uid) {
    return (
      <Route
      {...rest}
      render = {(props)=> {
        return <Component {...props} />
      }
    }/>
    // What the meaning of this code? Yes I get what it does but whats the 
    // science behind it? why is rest here. and what of the render? and 
    // where is the props coming from?
    )
  }

  return (
    <Route
    {...rest}
    render = {(props)=> {
      return <Redirect to ={{ pathname :"/login" }} />
    }
  }/>
  );
 
};
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);

