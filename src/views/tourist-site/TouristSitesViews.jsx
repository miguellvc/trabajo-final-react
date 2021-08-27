import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTourist } from '../../app/redux/actions/sitesActions';
import "../tourist-site/touristSitesView.css"

import { 
    CardSites
} from '../../components/shared/shared';

const mapStateToProps = state => ({
    sites: state.sitesReducer.sites,
    loading : state.sitesReducer.loading,
})

const mapActionsToProps = dispatch => ({
    getSites : () => dispatch(getAllTourist())
})



export class TouristSitesView extends Component{

    componentDidMount(){
        this.props.getSites()
        console.log("propiedad loanding", this.props.sites)
        // this.props.getSite("61268561733dd32c9c79c30d")
    }
    
    render(){
        console.log("propiedad loanding", this.props.loading)
        return(
                <>
                    
                    { this.props.loading ?  <div>Cargando Data</div> : <CardSites  sites={this.props.sites} info={ (id) => this.props.getSitee(id) }/>  } 
                    {/* {this.props.sites.length > 0 && <CardSites  sites={this.props.sites} info={ (id) => this.props.getSitee(id) }/>  } */}
                    
                </>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TouristSitesView)