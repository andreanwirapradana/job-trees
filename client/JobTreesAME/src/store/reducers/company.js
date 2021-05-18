const initialState = {
    user: {},
    post: []
};


const companyReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CP_LOGIN':
            return {...state, user: action.payload}
        default:
            return state
    }
};

export default companyReducers;