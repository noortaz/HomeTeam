import React from 'react';

// imported routes
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//imported the components
import Header from './components/Header/Header';
import Project from './components/Project/Project';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

class App extends React.Component {
  render() {
    return (
      <>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/project/details' component={ProjectDetails}/>
          <Route path='/project' component={Project}/>
          <Route/>
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;
