import { GET_ALL_SITES, GET_SITE } from "../actions/sitesActions";

const initialState = {
    loading: true,
    sites: [{sitio : "sitio iniciado"}],
    error: null
}

export const sitesReducer = (state = initialState, action) => {
    
    const { type, payload } = action;
    
    switch(type) {
        case GET_ALL_SITES:
            return { ...state, loading: false, sites: payload };
        case GET_SITE:
            return { ...state, loading: false, sites: payload };
        default : return state
    }
    
}