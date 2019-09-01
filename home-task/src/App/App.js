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
      
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/project' exact component={Project}/>
          <Route path='/' exact component={HomePage}/>
          <Route path='/:projectId' render={props => <ProjectDetails match={props.match}/>}/>
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
