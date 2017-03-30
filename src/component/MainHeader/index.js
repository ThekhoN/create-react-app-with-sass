import React, { Component } from 'react';
import dodHeaderImage from '../../assets/images/dod-header__image.jpg';
import './style.css';

export default class MainHeader extends Component {
  render(){
    return (
      <div className='main-header'>
        <img src={dodHeaderImage} alt='dod snapdeal'/>
      </div>
    );
  }
}
