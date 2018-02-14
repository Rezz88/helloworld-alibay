import React, { Component } from 'react';
import '../../../../App.css';

export default class Checkoutcard extends Component {


    render() {
        const{ image, price, name, description, deleteItem} = this.props// de-structuring shit from perks
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
                <div>
                    <button onClick={deleteItem}>D E L E T E</button>
                </div>
                

            </div>
        )
    }






}