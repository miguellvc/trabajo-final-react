import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSite } from "../../app/redux/actions/sitesActions";
import "../info-tourist-site/infoTouristSiteView.css";
const mapStateToProps = (state) => ({
  sites: state.sitesReducer.sites,
  loading: state.sitesReducer.loading,
  allSite: state.sitesReducer.allSite,
});

const mapActionsToProps = (dispatch) => ({
  getSite: (id) => dispatch(getSite(id)),
});

const InfoTouristSiteView = ({ sites, getSite }) => {
  let { id } = useParams();
  getSite(id);
//   useEffect(() => {
    
//     console.log("se ejecuta el componente info tourist", sites, id);
//   });

  return (
    <div>
      {sites.map((site) => {
        return (
          <div className="gallery">
            <h1>{site.name}</h1>
            <div >

                {site.photo_url.map(photo => {
                   return <img
                    src={photo.url}
                    width="260"
                    height="300"
                    alt="Galeria CSS 1"
                  />
                })}
              <img
                src="https://www.placecage.com/c/260/300"
                width="260"
                height="300"
                alt="Galeria CSS 2"
              />
              <img
                src="http://placekitten.com/260/300"
                width="260"
                height="300"
                alt="Galeria CSS 3"
              />
              <img
                src="http://www.stevensegallery.com/260/300"
                width="260"
                height="300"
                alt="Galeria CSS 4"
              />
            </div>

            <div className="container-map">
              <div className="map">
                  mapa
              </div>

              <div className="description">
                  <p>
                      {site.description}
                  </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(mapStateToProps, mapActionsToProps)(InfoTouristSiteView);
