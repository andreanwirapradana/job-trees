const initialState = {
    user : {},
    posts: []
};

const jobSeekersReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'JS_LOGIN':
            return {...state, user: action.payload}
        default:
            return state
    }
};

export default jobSeekersReducers;