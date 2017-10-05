import React, { Component } from 'react';
import '../styles/App.css';
import { beer } from '../data/data';

export default class Beer extends Component {
  render() {
    return (
      <div>
      {beer.map((item, i) => {
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
