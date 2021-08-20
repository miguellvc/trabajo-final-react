import React, { Component } from 'react';
import '../tourist-site/touristSites.css';

// importación de módulos
import { SideBar, 
        CardSites, 
        Burbujas,
        ButtonInfo } from '../shared/shared'
// import lagunabrava from "../../img/lagunabrava.jpg";

export class TouristSite extends Component {

    componentDidMount(){
    }

    render(){
        return(
            <div className="container">
                <SideBar></SideBar>
                <CardSites></CardSites>
                <Burbujas></Burbujas>
                <ButtonInfo></ButtonInfo>
            </div>
        )
    }

} 




