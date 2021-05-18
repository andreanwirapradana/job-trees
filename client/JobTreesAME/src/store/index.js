import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import companyReducers from './reducers/company';
import jobSeekerReducers from './reducers/jobSeekers';

const rootReducer = combineReducers({
    companyReducers,
    jobSeekerReducers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;