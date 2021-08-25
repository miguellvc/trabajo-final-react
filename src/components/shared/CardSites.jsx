import React from "react";
import { useHistory } from "react-router-dom";
import "../shared/shared.css";


export const CardSites = ({ sites, info }) => {  

  let history = useHistory();

  const infoSitio = (id) => {
    history.push("/infositio/" + id);
  }
  
  console.log("propiedad de card sites",  sites[0].name)
  
  return (
    <>
      <main className="container-sites">
        <div className="title-sites">
          <h2>Sitios Turisticos</h2>
        </div>

        <div className="container-sites-card">
          {
            sites.map(site =>{
              return(
                  
                  <figure onClick = { () => infoSitio(site._id)}>
                            <img src={site.photo_url[0].url} alt={site.photo_url[0].description}/>
                            <div class="capa">
                              <h3>{site.name}</h3>
                              <p>
                              {site.photo_url[0].description}
                              </p>
                            </div>
                  </figure>
                
              )
            })
          }
        </div>
      </main>
    </>
  );
};