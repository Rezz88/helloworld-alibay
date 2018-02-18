import React, { Component } from 'react';
import '../../App.css';




export default class ProductCard extends Component {

    render() {
        const { productID, category, price, seller, description, addToCart, title, imageName } = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div className="itemDisplayBox">
                <div className="imageDiv">
                    <img src={imageName} alt='Product' />
                </div>
                <div className="itemInfo">
                    <div className='fontStyleMain'>
                        {title}
                    </div>
                    <div>
                        {'category: ' + category}
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        {'$: '}{price}
                    </div>
                    <div>
                        {'seller: ' + seller}
                    </div>
                    <div>
                        {/* <button onClick={()=>addToBag(prodId)}>ADD</button> ** use 'prodId' in de-structuring above */}
                        <button className="button" onClick={addToCart}>ADD to C A R T</button>

                    </div>
                </div>
                </div>


            </div>
        )
    }
}