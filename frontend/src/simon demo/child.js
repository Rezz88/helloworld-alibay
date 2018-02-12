import React, { Component } from 'react';
export class Main extends Component {
  constructor() {
    super();
    this.state = {  }
  }
  CallParentFunction = () => {
    this.props.changeParentState('red')
  }
    render() {
      if(this.props.thing === 'ok'){
        return (
          <div>
            CHILD 
            {this.props.thing}
            <button onClick={this.CallParentFunction}>Change Parent State </button>
          </div>
        );
      } else {
        return (
          <div>
         nothing
          </div>
        );
      }
      
    }
  }
  