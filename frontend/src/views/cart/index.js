import React, { Component } from 'react';
import '../../App.css';
import {Cartindex} from './views/usercart'
import {Checkoutindex} from './views/usercheckout'

export class Cart extends Component {
    constructor()   {
        super()
        this.state = { active: 'Cartindex'}

    }

    ChangeComponent = (component) => {
        this.setState({ active: component })
      }

    renderComponent = () => {
        const { active } = this.state;
    
          if (active === 'Cartindex') {
            return <Cartindex />
          }
          else if (active === 'Checkoutindex') {
            return <Checkoutindex />
          }
          else {
            return <div></div>
          }
        }
      



    render() {
        return (
            <div>
              <ul className="App-header">
                <li>
                  <a onClick={() => this.ChangeComponent('Cartindex')}>  Cart</a>
                </li>
                <li>
                  <a onClick={() => this.ChangeComponent('Checkoutindex')}>Buy</a>
                </li>
              </ul>
              <div>
                {this.renderComponent()}
              </div>
            </div>
          )

    }

}
export default Cart;