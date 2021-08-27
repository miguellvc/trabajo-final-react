import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/dashboard';

import { 
  SideBar, 
  Burbujas,
  ButtonInfo
} from './components/shared/shared';

//view 
import { Home } from './views/Home';
import   InfoTouristSiteView  from './views/info-tourist-site/infoTouristSiteView'
class App extends Component {
  
  render(){
    return (
      <>
          
          <Switch>
            <div className="container-view">
              <SideBar/>
              <Burbujas/>
              <ButtonInfo/>
              <Route exact path="/" component={Home} />
              <Route exact path="/infositio/:id" component={InfoTouristSiteView} />
              <Route exact path="/dashboard" component={Dashboard} /> 
            
            </div>
           
          </Switch>
          
    
      </>
    )
  }
}

export default App;
