//services
import { getAllTouristSite, getTouristSite } from "../../services/touristSitesService";
//Action Types
export const GET_SITES_LOADING = "GET_SITES_LOADING";

export const GET_ALL_SITES = "GET_ALL_SITES"; 
export const GET_SITE = "GET_SITE";


//Actions Creators
export const sitesLoading = () => ({ type: GET_SITES_LOADING });
export const getAllTouristSiteAction = (sites) =>({ type: GET_ALL_SITES,  payload: sites });
export const getSiteAction = (site) => ({type: GET_SITE,  payload: site})

export const getAllTourist = () =>{

  return async (dispatch) => {
    dispatch(sitesLoading());
    try {
      const sites = await getAllTouristSite();
      console.log(sites)
      dispatch(getAllTouristSiteAction(sites));
    } catch (e) {
      console.log(e);
      // const { message } = e;
      // dispatch(getUsersError(message));
    }
  };

}


export const getSite = (id) => {
  
  return async (dispatch) => {
      dispatch(sitesLoading());
      try { 
        const site = await getTouristSite(id)    
        dispatch(getSiteAction(site))
      } catch (e) {
        console.log(e);
      }
    
    
  }

}