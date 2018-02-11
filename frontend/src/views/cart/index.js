import React, { Component } from 'react';
import '../../App.css';

export class Cart extends Component {

    // CallParentFunction = () => {
    //     this.props.changeParentState(false)
    //   }
    
    render() {
        return  (
        <div>
            you are at cart
            {/* <button onClick={this.CallParentFunction}>click to go to main</button> */}
        </div>
        )

    }

}
export default Cart;