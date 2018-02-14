import React, { Component } from 'react';

export class Login extends Component {
  constructor() {;
    super();
    this.state = { signIn: false, username: '', password: '', email: '' }
  }

  setInputValue =(key, value)=> {
    this.setState({[key]: value})
  }

  signupNow = () => {
    this.setState({ signIn: true })
  }
  signupPage = () => {
    const { username, password, email } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div className="loginInput">
            <input className="username" placeholder="username" value={username} onChange={(e)=> this.setInputValue('username', e.target.value)}></input>
            <input className="password" placeholder="password" value={password} onChange={(e)=> this.setInputValue('password', e.target.value)}></input>
            <input className="email" placeholder="email" value={email} onChange={(e)=> this.setInputValue('email', e.target.value)}></input>
          </div>
          <button onClick={()=> this.props.signUp(username, password, email)}>Sign up</button>
          {/* {this.state.list.map(x => <li>{x}</li>)} */}
          <div>
            {this.props.error ? 'Username/e-mail Already In Use': '' }
          </div>
        </header>
      </div>
    )
  }

  loginPage = () => {
    const { username, password } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div className="loginInput">
            <input className="username" placeholder="username" value={username} onChange={(e)=> this.setInputValue('username', e.target.value)}></input>
            <input className="password" placeholder="password" value={password} onChange={(e)=> this.setInputValue('password', e.target.value)}></input>
          </div>
          <button id="loginButtons" onClick={() => this.props.login(username, password)}>Login</button>
          <div>or</div>
          <button onClick={this.signupNow}>Sign up</button>
          {/* {this.state.list.map(x => <li>{x}</li>)} */}

        </header>
      </div>
    )
  };

  render() {
    
    return (
      <div>
        {this.state.signIn ? this.signupPage() : this.loginPage()}
      </div>
    )
  }
}
