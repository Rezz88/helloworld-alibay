import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';

export default class Checkoutcard extends Component {


    render() {
        const{ image, price, name, description, deleteItem} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {image}
                </div>
                <div className='Main-items'>
                    {name}
                </div>
                <div className='Main-items'>
                    {description}
                </div>
                <div className='Main-items'>
                    {'$ '+price}
                </div>
                <div>
                    <button className="button" onClick={deleteItem}>D E L E T E</button>
                </div>
                

            </div>
        )
    }






}