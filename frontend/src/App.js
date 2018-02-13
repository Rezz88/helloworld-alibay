import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Main } from './views/main'
import { Profile } from './views/profile'
import { Cart } from './views/cart'
import { Login } from './views/login'
import { Sell } from './views/sell'
// import {ImgVarName} from '../../backend/database/images/orchids.jpeg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'Main',
      login: true, //Temp marked as true. 
      error: false,
      username: '',
      prodId: '',
      itemPosted: false,
    }
  }

  ChangeComponent = (component) => {
    this.setState({ active: component })
  }

  renderComponent = () => {
    const { active, login, error } = this.state;

    if (!login) {
      return <Login login={this.login} signUp={this.signUp} error={error} />  //this.login points at the function error points at the state
    } else {
      if (active === 'Main') {
        return <Main />
      }
      else if (active === 'Profile') {
        return <Profile />
      }
      else if (active === 'Cart') {
        return <Cart />
      }
      else if (active === 'Sell') {
        return <Sell addItem={this.addItem} />
      }
      else {
        return <div></div>
      }
    }
  }

  login = (username, password) => {
    this.setState({ username })
    fetch('/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => this.setState({
        login: x,
        error: !x
      })
      )
  }

  signUp = (user, pass, mail) => {
    fetch('/signUp', {
      method: 'post',
      body: JSON.stringify({
        username: user,
        password: pass,
        email: mail
      })
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => this.setState({
        login: x,
        error: !x
      }))
      .then(() => console.log(this.state))
      .catch((err) => {
        console.log(err)
        this.setState({ error: true })
      })
    //change x to something more descriptive
  }

  addItem = (name, description, price) => {
    fetch('/toSell', {
      method: 'post',
      body: JSON.stringify({
        name,
        description,
        price
      })
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => { console.log("new Item: ", x); return x })
      .then(x => this.setState({
        prodId: x.prodId,
        itemPosted: x.itemPosted
      }))
      .then(() => {
        if (this.state.itemPosted === false) {
          return 'Your fields are incomplete'
        }
      })
  }

  render() {
    console.log(this.state)
    // const { active } = this.state;
    return (
      <div>
        <ul className="App-header">
          <li>
            <a onClick={() => this.ChangeComponent('Main')}>M A I N</a>
          </li>
          <li>
            <a onClick={() => this.ChangeComponent('Profile')}>P R O F I L E</a>
          </li>
          <li>
            <a onClick={() => this.ChangeComponent('Cart')}>C A R T</a>
          </li>
          <li>
            <a onClick={() => this.ChangeComponent('Sell')}>S E L L</a>
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







