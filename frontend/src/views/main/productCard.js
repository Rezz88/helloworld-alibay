import React, { Component } from 'react';
import '../../App.css';




export default class ProductCard extends Component {

    render() {
        const{ productID, price, username, description, addToCart, addToFav} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {username}
                </div>
                <div>
                    {'product ID: ' +productID}
                </div>
                <div>
                    {description}
                </div>
                <div>
                    {"$ "+price}
                </div>
                <div>
                    {/* <button onClick={()=>addToBag(prodId)}>ADD</button> ** use 'prodId' in de-structuring above */}
                    <button onClick={addToCart}>C A R T</button>
                    <button onClick={addToFav}>F A V</button>
                </div>
                

            </div>
        )
    }
}