import React, { Component } from 'react';
import moment from 'moment'
// import logo from './logo.svg';
import './App.css';
import { Main } from './views/main'
import { Profile } from './views/profile'
import { Cart } from './views/cart'
import { Login } from './views/login'
import { Sell } from './views/sell'
import { About } from './views/about'
import { Contact } from './views/contact'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'Main',
      login: true, //Temp marked as true. 
      error: false,
      username: 'blue',
      prodId: '',
      itemPosted: false,
      footer: '',
      imageName: ''
    }
  }

  ChangeComponent = (component) => {
    this.setState({ active: component })
  }

  renderComponent = () => {
    const { active, login, error, itemPosted, username, imageName } = this.state;
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
        return <Cart username={username} ChangeComponent={this.ChangeComponent} />
      }
      else if (active === 'Sell') {
        return <Sell
          addItem={this.addItem}
          itemPosted={itemPosted}
          username={username}
          uploadFile={this.uploadFile}
          imageName={imageName}
          sellNew={this.sellNew} />
      }
      else if (active === 'About') {
        return <About />
      }
      else if (active === 'Contact') {
        return <Contact />
      }
      else {
        return <div></div>
      }
    }
  }

  uploadFile = (x) => {
    var filename = x.name;
    var fileExtension = filename.split('.').pop();
    fetch('/upics?ext=' + fileExtension, { method: "POST", body: x })
      .then(x => x.text())
      .then(x => { console.log(x); return JSON.parse(x) })   //use x.json()
      .then(x => this.setState({ imageName: x }))


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
      .then(x => {
        this.setState({
          login: x,
          error: !x
        }, () => {
          console.log(this.state.login);
          if (typeof (this.state.login) !== "boolean") {
            this.setState({ login: false, username: '' })
          }
        })
      })
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
      .then(x => {
        this.setState({
          login: x,
          error: !x
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: true })
      })
    //change x to something more descriptive
  }

  addItem = (title, blurb, price, category) => {
    console.log(category)
    if (typeof (price) !== 'number') {
      return this.setState({ itemPosted: false })
    }
    fetch('/toSell', {
      method: 'post',
      body: JSON.stringify({   //send the suername instead of name
        username: this.state.username,
        imageName: this.state.imageName,
        category: category.label,
        title,
        blurb,
        price,
        timeStamp: new Date(),
        timeSince: moment().startOf('day').fromNow()
      })
    })
      .then(x => x.text())
      .then(x => JSON.parse(x))
      .then(x => { console.log("new Item: ", x); return x })
      .then(() => {
        this.setState({
          itemPosted: true,
          imageName: ''
        })
        //document.getElementById('italics500').value = ''
      })
  }
  sellNew = () => {
    this.setState({ itemPosted: false })
  }

  render() {
    console.log(this.state.imageName)
    // const { active } = this.state;
    return (
      <div>
        <ul className="App-header">
          <a>{'Logged in as : ' + this.state.username}</a>
          <a className="flash" onClick={() => this.ChangeComponent('Main')}>M A I N</a>
          <a className="flash" onClick={() => this.ChangeComponent('Profile')}>P R O F I L E</a>
          <a className="flash" onClick={() => this.ChangeComponent('Cart') && this.cartClick()}>C A R T</a>
          <a className="flash" onClick={() => this.ChangeComponent('Sell')}>S E L L</a>
          <a className="button2" onClick={() => this.setState({ login: false, username: '', active: 'Main' })}>L O G O U T</a>
        </ul>
        <div>
          {this.renderComponent()}
        </div>
        <ul className='App-footer'>
          <li>
            <a className="curse" onClick={() => this.ChangeComponent('About')}>| a b o u t |</a>
          </li>
          <li>
            <a className="curse" onClick={() => this.ChangeComponent('Contact')}>| c o n t a c t |</a>
          </li>
        </ul>
      </div>

    )
  }
}

export default App;