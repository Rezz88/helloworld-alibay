import React, { Component } from 'react';
import '../../App.css';




export default class ProductCard extends Component {

    render() {
        const{ image, name, description, addToBag, prodId, addToFav} = this.props// de-structuring shit from perks
        return (
            <div>
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
                    <button onClick={()=>addToBag(prodId)}>ADD</button>
                    <button onClick={addToFav}>FAV</button>
                </div>
                

            </div>
        )
    }
}