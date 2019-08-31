import React from 'react';
import {Link} from 'react-router-dom';

//import hero
import hero from '../../assets/cute2.png';


//import styles
import './homepage.scss'

class HomePage extends React.Component {
  render () {
    return (
      <>
      <div className='hero'>
        <div className='hero-left'>
          <img className='hero' src={hero} alt="" />
        </div>
        <div className='hero-right'>     
          <div className='hero-text'>
            MOM, DAD & ME
          </div>
          <h1 className='hero-slogan'> We're HomeTeam!</h1>
          <Link to='/project'><button className='hero-btn'>Let's Go</button></Link>
        </div>
      </div>

      <div className='activities'>
          <div className='activities__box'>
            <p>Set up your project</p>
          </div>
          <div className='activities__box middle'>
            <p>Complete your task</p>
          </div>
          <div className='activities__box'>
            <p>Get your reward</p>
          </div>
      </div>
      </>
    )
  }
}

export default HomePage;