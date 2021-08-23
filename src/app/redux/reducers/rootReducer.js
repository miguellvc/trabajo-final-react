import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { sitesReducer } from './sitesReducer';
const rootReducer = (state = {}, action) => {
    return state
}

//combinamos todos los reducer
export default combineReducers({
    rootReducer,
    usersReducer,
    sitesReducer
    //aquí se importa los demas reducer 
})