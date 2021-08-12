const intialState = {
    contacts: []
}


const ContactReducer = (state = intialState, action)=> {

    switch (action.type) {
        case "ADD_USER":
            return state
        
        default: 
        return state
    }

}

export default ContactReducer