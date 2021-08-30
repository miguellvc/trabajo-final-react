const base = process.env.REACT_APP_API_BASE_URL;
// https://pilar-final-task-backend.herokuapp.com/api/
// const routes = {
//     path1: () => `${base}/`,
//     path2: () => `${base}/resources`,
//     path3: (id) => `${base}/resoures/${id}`,
//     sample: () => `${base}/users?page=2`
// }

const routesSite ={
    getAllTouristSite : () => `${base}/touristSite`,
    getTouristSite : (id) => `${base}/touristSite/${id}`, 
    deleteTouristSite : (id) => `${base}/touristSite/${id}`,
    newTouristSite : () => `${base}/touristSite`
}



export default routesSite;