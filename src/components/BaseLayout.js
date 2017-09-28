import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component{


  render(){

    //potential inline styling?
    return(
      <div>

      <div className="App-header">
      <h3>
      <NavLink activeClassName="selected" className="App-Link" exact to="/">Splash Page</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/home">Home</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/beer">Beer</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/about">About Us</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/contact">Contact Us</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/wine">Wine</NavLink>
      <NavLink activeClassName="selected" className="App-Link" to="/liquor">Liquor</NavLink>
      </h3>
      </div>

      {this.props.children}

      <footer className="App-footer">
      <span>copyright 2017</span>
      </footer>

      </div>


    )
  }
}
