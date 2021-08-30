import React, { useState } from 'react'
import { connect } from 'react-redux';
import { newSite } from '../../app/redux/actions/sitesActions';

const mapActionsToProps = dispatch => ({
    addSite : (tourisSite) => dispatch(newSite(tourisSite)),
})

export const SiteForm = ({addSite}) => {
    const [ name, setName ] = useState("Parque Nacional Talampaya"); 
    const [ location, setLocation] = useState("Villa Unión");
    const [ lat, setLat] = useState("38932094");
    const [ log, setLog] = useState("432434");
    /*
    
    Prof. aquí la idea fue crear un formulario con campos
    dinámicos, para añadir más de una imágen y generar así el 
    array de objetos. Por cuestión de tiempo no pude hacerlo. 
    */
    
    const [ photoOne, setPhotoOne] = useState({
        id: 1,
        url: "https://www.norte.com/img/2018/11/parque-nacional-talampaya.jpg",
        title: "El Cañon de Talampaya",
        description: "foto del cañon"
    });
    const [ description, setDescription] = useState("Parque Nacional Talampaya, hubicado a 200km de la Capital de la Provincia de La Rioja");
    const [ tags, setTags] = useState("Talampaya, turismo");

    const submitForm = (e) => {
        e.preventDefault()
        const touristSite = {
            name: name, 
            location: location,
            lat: lat, 
            long: log, 
            photo: [{
                url: photoOne.url,
                title: photoOne.title,
                description: photoOne.description
            }],
            description: description,
            tags: tags
        }

       addSite(touristSite);
       
    }

    return(
        <>
              <form onSubmit= {submitForm}>
               <div className="mb-3">
                   <label  className="form-label">Nombre sitio</label>
                   <input type="input" className="form-control" value={ name } onChange={ (e) => setName(e.target.value) }/>
               </div>
               <div className="mb-3">
                   <label  className="form-label">Localidad</label>
                   <input type="input" className="form-control" value={ location } onChange={ (e) => setLocation(e.target.value) }/>
               </div>
               <div className="row mb-3">
               
                   <div className="col-6">
                       <label  className="form-label">Latitud</label>
                       <input type="input" className="form-control" value={ lat } onChange={ (e) => setLat(e.target.value)}/>
                   </div>

                   <div className="col-6">
                           <label  className="form-label">Longitud</label>
                           <input type="input" className="form-control" value={ log } onChange={ (e) => setLog(e.target.value) }/>
                   </div>
               </div>
               <div className="accordion mb-3" >
                       <div className="accordion-item">
                           <h2 className="accordion-header" >
                               <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                   Fotos
                               </button>
                           </h2>
                           <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                               <div className="accordion-body">
                                   
                                   
                                     <div className="row" > 
                                           <div className="col-6">
                                               <label  className="form-label">Título</label>
                                               <input type="input" className="form-control" onChange={ (e) => setPhotoOne({...photoOne, title: e.target.value})} value={photoOne.title}/>
                                           </div>
                                           <div className="col-6">
                                               <label  className="form-label">U.R.L.</label>
                                               <input type="input" className="form-control" onChange={ (e) => setPhotoOne({...photoOne, url: e.target.value})} value={photoOne.url}/>
                                           </div>
                                           <div className="col-12">
                                           <label  className="form-label">Descripción</label>
                                               <input type="input" className="form-control" onChange={ (e) => setPhotoOne({...photoOne, description: e.target.value})} value={photoOne.description}/>
                                           </div>
                                       </div>
                               </div>

                           </div>
                       </div>
               </div>
               <div className="mb-3">
                   <label  className="form-label">Descripción</label>
                   <input type="input" className="form-control" value={ description } onChange={ (e) => setDescription(e.target.value) }/>
               </div>
               <div className="mb-3">
                   <label  className="form-label">Tags</label>
                   <input type="input" className="form-control" value={ tags } onChange={ (e) => setTags(e.target.value) }/>
               </div>

               <div className="mb-3">
                    <input type="submit" className="btn btn-success"/>
               </div>
           </form>
        
        </>
    )
}

export default connect(null, mapActionsToProps)(SiteForm)