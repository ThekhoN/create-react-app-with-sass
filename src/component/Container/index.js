import React, { Component } from 'react';
import './style.css';
import MainHeader from '../MainHeader';

export default class Container extends Component {
  render(){
    return (<div className='container'>
      <MainHeader/>
      <h2 className='container__header'>This is the Container Component</h2>
    </div>);
  }
}
