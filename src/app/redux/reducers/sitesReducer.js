import { GET_ALL_SITES, GET_SITE,  GET_SITES_LOADING } from "../actions/sitesActions";

const initialState = {
    loading: true,
    loadingSite: true,
    sites: [{sitio : "sitio iniciado"}],
    error: null
}

export const sitesReducer = (state = initialState, action) => {
    
    const { type, payload } = action;
    
    switch(type) {
        case  GET_SITES_LOADING:
            return { ...state, loading: true, sites: [], error: null };
        case GET_ALL_SITES:
            return { ...state, loading: false, loadingSite: true, sites: payload };
        case GET_SITE:
            return { ...state, loading: false, loadingSite: false, sites: payload };
        default : return state
    }
    
}