import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Main } from './views/main'
import { Profile } from './views/profile'
import { Cart } from './views/cart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
    }
  }

  ChangeComponent = (component) => {
    this.setState({ active: component })
  }

  renderComponent = () => {
    const { active } = this.state;
    if (active === 'Main') {
      return <Main />
    }
    else if (active === 'Profile') {
      return <Profile />
    }
    else if (active === 'Cart') {
      return <Cart />
    }
    else {
      return <div></div>
    }

  }

  render() {
    // const { active } = this.state;
    return (
      <div >
        <ul className = "App-header">
          <li>
            <a onClick={() => this.ChangeComponent('Main')}>M A I N</a>
          </li>
          <li>
            <a onClick={() => this.ChangeComponent('Profile')}>P R O F I L E</a>
          </li>
          <li>
            <a onClick={() => this.ChangeComponent('Cart')}>C A R T</a>
          </li>
        </ul>
        <div>
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default App;
