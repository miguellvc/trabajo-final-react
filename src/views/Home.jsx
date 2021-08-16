import React, { Component } from 'react';

import { TouristSite } from '../components/tourist-site/TouristSites';

export class Home extends Component {

    render(){
        return(
            <div>
                <TouristSite/>
            </div>
        )
    }
}