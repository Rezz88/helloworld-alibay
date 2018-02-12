import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Main } from './views/main'
import { Profile } from './views/profile'
import { Cart } from './views/cart'
import { Login } from './views/login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
      login: true,
      error: false
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
      else {
        return <div></div>
      }
    }

  }



  login = (username, password) => {
    console.log({ username, password })
    fetch('/login', {
      method: 'post',
      body: {
        username,
        password
      }
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x =>
        this.setState({
          login: x,
          error: !x
        })
      )
  }

  signUp = (user, pass, mail) => {
    console.log({ user, pass, mail })
    fetch('/signUp', {
      method: 'post',
      body: {
        username: user,
        password: pass,
        email: mail
      }
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => this.setState({ 
        login: x,
        error: !x
       }).catch((err)=> {
         console.log(err)
         this.setState({error: true})
        })
      )   //change x to something more descriptive
       

  }


  render() {
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
        </ul>
        <div>
          {this.renderComponent()}
        </div>
      </div>
    )
  }
}

export default App;







