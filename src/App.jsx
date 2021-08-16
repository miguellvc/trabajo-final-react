import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';

//view 
import { Home } from './views/Home';
import UsersView  from './views/users/UsersView';


class App extends Component {
  
  render(){
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={UsersView} />
        </Switch>  
      </>
    )
  }
}

export default App;
