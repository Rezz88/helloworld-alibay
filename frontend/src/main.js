import React, { Component } from 'react';
import './App.css';


export class Main extends Component {
    constructor()   {
        super();
        this.state = {
        }
    }
  
    CallParentFunction = () => {
        this.props.changeParentState('red')
      }



    render() {
        return(
        <div>
            you are at main
            <button onClick={this.CallParentFunction}>click to go to profile</button>
        </div>
        )
    }
  }


// import React, { Component } from 'react';
// import './App.css';
// import Profile from './profile.js'

// export class Main extends Component {
//     constructor()   {
//         super();
//         this.state = {profilepage: false, mainpage: true, profileState: false};
//     }
  
//     click=() => {
//         this.setState({profileState: true})
//         // this.setState({mainpage: false})
//         // return( <Profile/>)
        
//     }


//     page=()=> {
//         // if (this.state.mainpage === true){
//         return(
//             <div className="App">
              
//             <div>
//               <button onClick={this.click}>profile</button>
//               <button>sell</button>
//               <button>to cart</button>
//               < Profile 
//                 profileState = {this.state.profileState}
//               />
//             </div>
//             <div>
//                 <input ref={r => this.input = r} />
//                 <button>search</button>
//             </div>
//             </div>
//             );
//         // } else {
//         //     return (
//         //         <div> empty </div>
//         //     )
//         // }
        
//     }



//     render() {
//         // if(this.state.profilpage)  {
//         //     return this.click()
//         // };
//             return this.page()
        
        
      
//     }
//   }