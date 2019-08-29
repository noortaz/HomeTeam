import React from 'react';
//import logo
import logo from '../../assets/hometeam.png';

//import styles
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header>
      <h1>HomeTeam</h1>
      {/* <img className='logo' src={logo} alt=""/> */}
      </header>
    )
  }
}

export default Header;