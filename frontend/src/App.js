import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Main } from './views/main'
import { Profile } from './views/profile'
import { Cart } from './views/cart'
import { Login } from './views/login'
import { Sell } from './views/sell'
import { About } from './views/about'
import { Contact } from './views/contact'
import TEST from './test.js'

// import {ImgVarName} from '../../backend/database/images/orchids.jpeg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'Main',
      login: true, //Temp marked as true. 
      error: false,
      username: 'washy',
      prodId: '',
      itemPosted: false,
      footer: ''
    }
  }

  ChangeComponent = (component) => {
    this.setState({ active: component })
  }

  renderComponent = () => {
    const { active, login, error, itemPosted, username } = this.state;
    if (!login) {
      return <Login login={this.login} signUp={this.signUp} error={error} />  //this.login points at the function error points at the state
    } else {
      if (active === 'Main') {
        return <Main username={username} />
      }
      else if (active === 'Profile') {
        return <Profile username={username} editProfile={this.editProfile} />
      }
      else if (active === 'Cart') {
        return <Cart username={username} />
      }
      else if (active === 'Sell') {
        return <Sell addItem={this.addItem} itemPosted={itemPosted} username={username} />
      }
      else if (active === 'About') {
        return <About />
      }
      else if (active === 'ContactUs') {
        return <Contact />
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
      }))
      .then(() => console.log(this.state))
  }

  signUp = (username, password, email) => {
    this.setState({ username })
    fetch('/signUp', {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
        email
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

  addItem = (title, blurb, price) => {
    fetch('/toSell', {
      method: 'post',
      body: JSON.stringify({   //send the suername instead of name
        username: this.state.username,
        title,
        blurb,
        price,
        timeStamp: new Date()
      })
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => { console.log("new Item: ", x); return x })
      .then(() =>
        this.setState({
          itemPosted: true
        }))
  }


  //Still in the works

  // editProfile = () => {
  //   const myProfile = {}
  //   fetch('/profile', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       username: this.state.username
  //     })
  //   })
  //   .then(x => x.text())
  //   .then(x => JSON.parse(x))
  //   .then(x => myProfile = x)
  //   return (
  //     <div>
  //       <input> </input>
  //       <input> </input>
  //       <input> </input>
  //       <input> </input>
  //       <input> </input>
  //     </div>
  //   )
  // }

  render() {
    console.log(this.state)
    // const { active } = this.state;
    return (
      <div>
        <TEST />ghvgvvfvdddvdvdvf
        <ul className="App-header">
          <a className="flash" onClick={() => this.ChangeComponent('Main')}>M A I N</a>
          <a className="flash" onClick={() => this.ChangeComponent('Profile')}>P R O F I L E</a>
          <a className="flash" onClick={() => this.ChangeComponent('Cart') && this.cartClick()}>C A R T</a>
          <a className="flash" onClick={() => this.ChangeComponent('Sell')}>S E L L</a>
        </ul>
        <div>
          {this.renderComponent()}
        </div>
        <ul className='App-footer'>
          <li>
            <a className="curse" onClick={() => this.ChangeComponent('About')}>| a b o u t |</a>
          </li>
          <li>
            <a className="curse" onClick={() => this.ChangeComponent('ContactUs')}>| c o n t a c t |</a>
          </li>
        </ul>
      </div>

    )
  }
}

export default App;







