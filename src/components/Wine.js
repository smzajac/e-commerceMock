import React, { Component } from 'react';
import '../styles/App.css';
import { wine } from '../data/data';
import { Link } from 'react-router-dom';



export default class Wine extends Component {
  render() {
    return (
      <div>
      {wine.map((item, i) => {
        return <div key={i}>

            <img src={item.img} alt={item.title} />
            <div>
              <div>Title: {item.title}</div>
              <div>Description: {item.description}</div>
              <div>Price: {item.price}</div>
            </div>

          </div>
        })}
      </div>
    )
  }
}
