import React, { Component } from 'react';
import './App.css';
import {Child} from './child.js'
class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false, 
      parentState : 'blue'}
  }


  ChangeAppState = (newValue) => {
    this.setState({parentState : newValue})
  } 

  render() {
    return (
      <div>
        < Child 
          thing = "ok"
          ChangeParentState = {this.ChangeAppState}
        />
        {this.state.loggedIn ? this.todoList() : this.login()}
      </div>
    );
  }
}

export default App;



  // loginButton = () => {
  //   this.name = this.user.value
  //   fetch('/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: this.name
  //     })
  //   })
  //   this.setState({ loggedIn: true })
  // }

  // logoutButton = () => {
  //   fetch('/logout', {
  //     method: 'POST',
  //   })
  //   this.setState({ loggedIn: false })
  // }

  
  // login = () => {
  //   return (<div>
  //     <input placeholder='username' ref={r => this.user = r} />
  //     <button onClick={this.loginButton}> Login </button>
  //   </div>)
  // }

  // click = () => { 
  //   var obj = {user: this.name, input: this.input.value}

  //   fetch('/addTodos', {
  //     method: 'POST',
  //     body: JSON.stringify(obj)
  //   })
  //   this.setState({ todos: this.state.todos.concat(this.input.value) })
  // }

  // todoList = () => {
  //   return (<div>
  //     <input ref={r => this.input = r} />
  //     <button onClick={this.click}> Submit </button>
  //     <button onClick={this.reset}> Reset </button>
  //     <button onClick={this.logoutButton}> Logout </button>
  //     <ul>
  //       {this.state.todos.map(x => (<li> {x} </li>))}
  //     </ul>
  //   </div>)
  // }