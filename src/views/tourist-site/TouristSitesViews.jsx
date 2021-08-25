import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSites, getSite } from '../../app/redux/actions/sitesActions';
import "../tourist-site/touristSitesView.css"

import { 
    CardSites
} from '../../components/shared/shared';

const mapStateToProps = state => ({
    sites: state.sitesReducer.sites,
    loading : state.sitesReducer.loading,
    allSite: state.sitesReducer.allSite,
})

const mapActionsToProps = dispatch => ({
    getSites : () => dispatch(getAllSites()),
    getSitee : (id) => getSite(id, dispatch)
})



export class TouristSitesView extends Component{
    
    componentDidMount(){
        this.props.getSites()
    }
    
    render(){
        return(
                <>
                    {this.props.loading ? <p>Cargando data</p> : <CardSites  sites={this.props.sites} info={ (id) => this.props.getSitee(id) }/> }
                    
                </>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TouristSitesView)