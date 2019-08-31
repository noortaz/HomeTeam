import React from 'react';
import {Link} from 'react-router-dom';

//import styles
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'><h1>HomeTeam</h1></Link>
      </header>
    )
  }
}

export default Header;