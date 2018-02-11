import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Main} from './views/main'
import {Profile} from './views/profile'
import {Cart} from './views/cart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: '',
    }
  }

  ChangeComponent = (component) => {
    this.setState({active: component})
  } 

  renderComponent = () => {
    const { active } = this.state;
    if (active==='Main')  {
      return <Main/>
    }
    else if (active === 'Profile')  {
      return <Profile/>
    } 
    else if (active === 'Cart')  {
      return <Cart/>
    } 
    else {
      return <div></div>
    }
    
  }



  render() {
    // const { active } = this.state;
    return(
   <div>
     <ul>
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


// if (this.state.loadMain===true)  {
    // return (
    // <Main
    // changeParentState = {this.ChangeAppState}
    // />
    // )
    // }
    // if (this.state.loadMain === false)  {
    //   return (
    //     <Profile
    //     changeParentState = {this.ChangeAppState}/>
    //   )
    // }