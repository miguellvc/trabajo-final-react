import React, { Component } from "react";
import { connect } from 'react-redux';
import  SiteForm  from "./siteForm";
import { getAllTourist, deleteSite } from '../../app/redux/actions/sitesActions';

const mapStateToProps = state => ({
    sites: state.sitesReducer.sites,
    loading : state.sitesReducer.loading,
})

const mapActionsToProps = dispatch => ({
    getSites : () => dispatch(getAllTourist()),
    deletSite : (id) => dispatch(deleteSite(id))
})

export class Dashboard extends Component {



componentDidMount(){
    this.props.getSites();
}
deleteSite = (id) =>{
    this.props.deletSite(id);
    console.log(id)
}





render() {
    
    const { sites } = this.props
    
    
    
    console.log("todos los sitios", sites, this.props.loading);
    return (
      
    <>
      {this.props.loading ? <div>Cargando data </div> : 
      
      <div className="container
      row">
       <div className="col-8">
         <table className="table">
           <thead>
             <tr >
               <th scope="col">Id</th>
               <th scope="col">Sitio Turístico</th>
               <th scope="col">Localidad</th>
               <th scope="col">Acción</th>
             </tr>
           </thead>
           <tbody>

               {sites.map(site => {
                   return <tr key={site._id}>
                               <td>{site._id}</td>
                               <td>{site.name}</td>
                               <td>{site.description}</td>
                               <td>
                                   <button  className="btn btn-success">Edit</button> 
                                   <button onClick={() => this.deleteSite(site._id)} className="btn btn-danger">Elim</button>
                               </td>
                          </tr>
               })}
             
           </tbody>
         </table>
       </div>
       <div className="col-4">
       <SiteForm/>
       </div>
     </div>
      }  
     
    </>
    
    );
  }
}


export default connect(mapStateToProps, mapActionsToProps)(Dashboard)