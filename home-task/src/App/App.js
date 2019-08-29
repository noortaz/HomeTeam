import React from 'react';
import './app.scss';

// imported routes
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//imported the components
import HomePage from '../components/HomePage/HomePage';
import Header from '../components/Header/Header';
import Project from '../components/Project/Project';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';

class App extends React.Component {
  
  
  render() {
    return (
      <div className='app'>
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route path='/project/details' component={ProjectDetails}/>
          <Route path='/project' component={Project}/>
          <Route path='/' component={HomePage}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
