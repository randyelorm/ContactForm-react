

export const EmailSignUp = (email, password)=> {
    return(dispatch,state, {getFirebase})=> {
    let firebase = getFirebase()
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential;
    console.log(user)

  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.code)
  });
    }
}


export const GoogleLogin = ()=> {
    return (dispatch, state, {getFirebase})=> {
    
    let firebase = getFirebase()
    var provider = new firebase.auth.GoogleAuthProvider();
   
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
}


export const LoginWithEmail = (email, password)=> {
    return(dispatch,state, {getFirebase})=> {
    let firebase = getFirebase()
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential;
    console.log(email)
    console.log(password)

  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(error.code)
  });
    }
}



export const Logout = ()=> {
    return (dispatch, state, {getFirebase})=> {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            console.log("success")
          }).catch((error) => {
            alert(error)
          });
    }
}