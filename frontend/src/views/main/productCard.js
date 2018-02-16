import React, { Component } from 'react';
import '../../App.css';




export default class ProductCard extends Component {

    render() {
        const{ productID, category, price, seller, description, addToCart, title, imageName} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {'sellerID: '+seller}
                </div>
                <div>
                    {'product ID: ' + productID}
                </div>
                <div>
                <img src= {imageName} alt='Product' />
                </div>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    {'category: '+category}
                </div>
                <div>
                    {description}
                </div>
                <div>
                    {'$: '}{price}
                </div>
                <div>
                    {/* <button onClick={()=>addToBag(prodId)}>ADD</button> ** use 'prodId' in de-structuring above */}
                    <button className="button" onClick={addToCart}>ADD to C A R T</button>
                    
                </div>


            </div>
        )
    }
}