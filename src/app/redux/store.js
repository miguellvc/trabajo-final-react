import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';//despacha acciones asincrónas
import logger from 'redux-logger'; //registra los cambios del estore en el navegador
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const middlewares = [
    thunkMiddleware,
    process.env.NODE_ENV !== 'production' && logger
].filter(Boolean);

export const store = createStore(
    rootReducer, //aquí recibe el state
    composeWithDevTools(applyMiddleware(...middlewares)) //pasamos los middleware al store
);