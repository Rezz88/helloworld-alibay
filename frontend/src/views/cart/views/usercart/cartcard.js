import React, { Component } from 'react';
import '../../../../App.css';

export default class Cartcard extends Component {


    render() {
        const{ seller ,price, productID, description, deleteItem} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {'seller: '+seller}
                </div>
                <div>
                    {'productID: '+productID}
                </div>
                <div>
                    {'description: '+description}
                </div>
                <div>
                    {'$ '+price}
                </div>
                <div>
                    <button className="button" onClick={checkout}>C H E C K O U T</button>
                    <button className="button" onClick={deleteItem}>D E L E T E</button>
                </div>
            </div>
            
        )
    }






}