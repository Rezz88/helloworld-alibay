import React, { Component } from 'react';
import '../../App.css';

export class ItemSold extends Component {

    render() {
        const{ image, price, name, description, addToCart, addToFav} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {image}
                </div>
                <div>
                    {name}
                </div>
                <div>
                    {description}
                </div>
                <div>
                    {price}
                </div>
            </div>
        )
    }
}      

export default ItemSold;
