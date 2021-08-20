import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//view 
import { Home } from './views/Home';


class App extends Component {
  
  render(){
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/users" component={UsersView} /> */}
        </Switch>  
      </>
    )
  }
}

export default App;
