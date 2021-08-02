import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';

const root = (state = {}, action) => {
    return state
}

export default combineReducers({
    root,
    usersReducer
})