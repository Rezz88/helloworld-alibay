import React, { Component } from 'react';
import '../../App.css';

export class HistoryItem extends Component {

    render() {
        const{ image, price, name, description, addToCart, addToFav} = this.props// de-structuring shit from perks
        return (
            <div>
                <h3>History Page</h3>
            <div className='sold-item'>
                <div>Image
                    {image}
                </div>
                <div>Name
                    {name}
                </div>
                <div>Discription
                    {description}
                </div>
                <div>Price
                    {price}
                </div>
            </div>
            </div>
        )
    }
} 
export default HistoryItem;
