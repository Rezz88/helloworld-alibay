import React, { Component } from 'react';
import '../../App.css';
import {Cartindex} from './views/usercart'
import {Checkoutindex} from './views/usercheckout'

export class Cart extends Component {
    constructor()   {
        super()
        this.state = { active: ''}
    }

    ChangeComponent = (component) => {
        this.setState({ active: component })
      }

    renderComponent = () => {
        const { active } = this.state;
    
          if (active === 'Cartindex') {
            return <Cartindex 
            username={this.props.username}
            />
          }
          else if (active === 'Checkoutindex') {
            return <Checkoutindex
            username={this.props.username}
            />
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
                  <a onClick={() => this.ChangeComponent('Checkoutindex')}>Checkout</a>
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