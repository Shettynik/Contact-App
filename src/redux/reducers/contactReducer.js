const initialState = [
    {
        id:0,
        name:"Nikshita",
        email:"nik@g.com",
        number:"1234567890"
    },
    {
        id:1,
        name:"N",
        email:"test@g.com",
        number:"1234512345"
    }
];

const contactReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state =[...state, action.payload];
            return state
        case "EDIT_CONTACT":
            const updateState = state.map(contact => contact.id===action.payload.id ? action.payload: contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const stateAfterDelete = state.filter(contact => contact.id !== action.payload && contact);
            state = stateAfterDelete;
            return state;
        default:
            return state;
    }
};

export default contactReducer;