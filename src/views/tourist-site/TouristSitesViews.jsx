import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSites } from '../../app/redux/actions/sitesActions';
import "../tourist-site/touristSitesView.css"

import { 
    SideBar,
    CardSites, 
    Burbujas,
    ButtonInfo 
} from '../../components/shared/shared';

const mapStateToProps = state => ({
    sites: state.sitesReducer.sites,
    loading : state.sitesReducer.loading,
    allSite: state.sitesReducer.allSite,
})

const mapActionsToProps = dispatch => ({
    getSites: () => dispatch(getAllSites())
})

export class TouristSitesView extends Component{
    
    componentDidMount(){
        this.props.getSites()
    }
    
    render(){
        return(
            <div className="container">
                <SideBar></SideBar>
                {this.props.loading ? <p>Cargando data</p> : <CardSites  sites={this.props.sites}/> }
                <Burbujas></Burbujas>
                <ButtonInfo></ButtonInfo>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(TouristSitesView)