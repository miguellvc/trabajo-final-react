import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';

const rootReducer = (state = {}, action) => {
    return state
}

//combinamos todos los reducer
export default combineReducers({
    rootReducer,
    usersReducer
    //aquí se importa los demas reducer 
})