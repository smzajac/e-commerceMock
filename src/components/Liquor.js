import React, { Component } from 'react';
import '../styles/App.css';
import { liquor } from '../data/data';

export default class Liquor extends Component {
  render() {
    return (
      <div>
      {liquor.map((item, i) => {
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
