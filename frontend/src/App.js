import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Main} from './main.js'
import {Profile} from './profile.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: true,
      parentState : 'blue'
    }
  }

  ChangeAppState = (newValue) => {
    this.setState({parentState : newValue})
  } 

  render() {
    if (this.state.loggedin === true)  {
    return (
      <div>
    <Main
    changeParentState = {this.ChangeAppState}
    />
    <Profile/>
    </div>
  )

    }
  }
}

export default App;







// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import {Main} from './main.js'

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedin: false, 
//       mainstate: true,
//       // loadMain: false,
//       // loadProfile: false
//     }
//   }

//   // ChangeMainState = (newValue) => {
//   //   this.setState({loadMain : newValue})
//   // } 

//   render() {

//     if (!this.state.loggedin) {
//       return  (
//        <Main
//        mainState = {this.mainstate}
//       //  ChangeLoadMain = {this.ChangeMainState}
//        /> 
//       )
//     }
//   }
// }

// export default App;


