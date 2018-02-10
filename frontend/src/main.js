import React, { Component } from 'react';
import './App.css';
import Profile from './profile.js'
export class Main extends Component {
    constructor()   {
        super();
        this.state = {};
    }

    click=()=>  {
        return  (
        <Profile/>
        )
    }


    render() {
      return (
          <div className="App">
        <div>
          <button onClick={this.click}>profile</button>
          <button>sell</button>
          <button>to cart</button>
        </div>
        <div>
            <input ref={r => this.input = r} />
            <button>search</button>
        </div>
        </div>
      );
    }
  }