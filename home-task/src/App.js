import React from 'react';
import './App.css';
import Project from './components/Project/Project';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
      
      <BrowserRouter>
        <Switch>
          <Route path='/projects' />
          <Route />
          <Route/>
        </Switch>
      </BrowserRouter>
      <h1>Bismillah</h1>
      <Project/>
      </>
    )
  }
}

export default App;
