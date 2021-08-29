import React, { useState } from 'react'



export const SiteForm = () => {
    const [ name, setName ] = useState(""); 
    const [ location, setLocation] = useState("");
    const [ lat, setLat] = useState("");
    const [ log, setLog] = useState("");
    const [ photos, setPhotos] = useState([{
        url: "",
        title: "",
        description: ""
    }]);

    const changeInput = (e) =>  photos.map( () => setPhotos([...photos], photos))

    const submitForm = (e) => {
        e.preventDefault()
        console.log({name: name})
        console.log("se ejecuta el fomulario")
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
                                   <div className="row">
                                       <div className="col-6">
                                           <label  className="form-label">Título</label>
                                           <input type="password" className="form-control" value={ log } onChange={ (e) => setLog(e.target.value) }/>
                                       </div>
                                       <div className="col-6">
                                           <label  className="form-label">U.R.L.</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                       <div className="col-12">
                                       <label  className="form-label">Descripción</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                   </div>

                                   <div className="row">
                                       <div className="col-6">
                                           <label  className="form-label">Título</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                       <div className="col-6">
                                           <label  className="form-label">U.R.L.</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                       <div className="col-12">
                                       <label  className="form-label">Descripción</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                   </div>

                                   <div className="row">
                                       <div className="col-6">
                                           <label  className="form-label">Título</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                       <div className="col-6">
                                           <label  className="form-label">U.R.L.</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                       <div className="col-12">
                                       <label  className="form-label">Descripción</label>
                                           <input type="password" className="form-control" id="exampleInputPassword1"/>
                                       </div>
                                   </div>
                               </div>

                           </div>
                       </div>
               </div>
               <div className="mb-3">
                   <label  className="form-label">Descripción</label>
                   <input type="password" className="form-control" id="exampleInputPassword1"/>
               </div>

               <div className="mb-3">
                    <input type="submit" className="btn btn-success"/>
               </div>
           </form>
        
        </>
    )
}