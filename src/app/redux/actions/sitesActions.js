
//Action Types
export const GET_ALL_SITES = "GET_ALL_SITES"; 
export const GET_SITE = "GET_SITE";
//Actions Creators

const sites = 
    [
        {
          "_id": "6112d552a200d3179806821a",
          "name": "Reserva Cerro Del Toro",
          "location": "Villa Castelli",
          "photo_url":[{
            "title" : "Vista Panorámica",
            "description" : "Descripción de la imagen",
            "url" : "https://lh3.googleusercontent.com/p/AF1QipM7XmaVv1uNmw4AoicGfDUhNfp70qx6ZyyXJvYC=s1600-w400"
          }],
          "lat": -28.999269,
          "long": -68.2026975,
          "description": "el Cerro del Toro se encuentra en la Localidad de Villa Castelli, a 310km de la Capital de la Pcia. Se trata de un Sitio Arqueológico",
          "tags": "cerro, turismo"
        },
        {
          "_id": "6112d552a200d3179806822a",
          "name": "Parque Talampaya",
          "location": "Villa Unión",
          "photo_url":[{
            "title" : "El Cañon",
            "description" : "Descripción de la imagen",
            "url" : "https://alexisracionero.com/wp-content/uploads/2014/02/Foto-1.1-1024x600.jpg"
          }],
          "lat": -28.999269,
          "long": -68.2026975,
          "description": "Parque Nacional Talampaya",
          "tags": "parque, cañon"
        }
      ]

export const getAllSites = () =>({ type: GET_ALL_SITES,  payload: sites });
export const getSiteAction = (site) => ({type: GET_SITE,  payload: site})

//Dispatch with Thunks Middleware

const site = [
  {
    "_id": "6112d552a200d3179806821a",
    "name": "Reserva",
    "location": "Villa Castelli",
    "photo_url":[{
      "title" : "Vista Panorámica",
      "description" : "Descripción de la imagen",
      "url" : "https://lh3.googleusercontent.com/p/AF1QipM7XmaVv1uNmw4AoicGfDUhNfp70qx6ZyyXJvYC=s1600-w400"
    }],
    "lat": -28.999269,
    "long": -68.2026975,
    "description": "el Cerro del Toro se encuentra en la Localidad de Villa Castelli, a 310km de la Capital de la Pcia. Se trata de un Sitio Arqueológico",
    "tags": "cerro, turismo"
  }
]


export const getSite = (id) => {
  
  return (dispatch) => {
      dispatch(getSiteAction(site))
  }

}