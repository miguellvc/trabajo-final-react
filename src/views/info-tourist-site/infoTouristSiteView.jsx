import React, { Component } from "react";
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getSite } from "../../app/redux/actions/sitesActions";
import {MapContainer, Marker, TileLayer} from"react-leaflet";
import "../info-tourist-site/infoTouristSiteView.css";

const mapStateToProps = (state) => ({
  sites: state.sitesReducer.sites,
  loading: state.sitesReducer.loadingSite,
});

const mapActionsToProps = (dispatch) => ({
  getSit: (id) => dispatch(getSite(id)),
});
export class InfoTouristSiteView extends Component {

  componentWillMount() {
    const {
      match: { params },
    } = this.props;
    this.props.getSit(params.id)
    console.log("Componente infot tourist", this.props.sites, params);
    // console.log("sitio ", this.props.getSit(params.id));
  }

  

  render() {
    const site = this.props.sites;
    const defaultPosition = [site.lat, site.long]; // Paris position
    return (

      this.props.loading ?  <div>Cargando Data</div> :
      <div className="gallery">
        <h1>{site.name}</h1>

        <div className="gallery-container-img">
            {site.photo.map((photo) => {
              return (
                <img className="img"
                  src={photo.url}
                  alt={photo.description}
                />
              );
            })}
            
        </div>

        <div className="container-map">
          <div className="map">
            <MapContainer
              center={defaultPosition}
              zoom={13}
              style={{ height: "50vh" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div className="description">
            <p>{site.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapActionsToProps)(InfoTouristSiteView);
