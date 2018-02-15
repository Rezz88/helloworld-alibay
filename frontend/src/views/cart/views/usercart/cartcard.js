import React, { Component } from 'react';
import '../../../../App.css';

export default class Cartcard extends Component {


    render() {
        const{ username ,price, productID, description, checkout, deleteItem} = this.props// de-structuring shit from perks
        return (
            <div className='Main-items'>
                <div>
                    {'seller: '+username}
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
                    <button onClick={checkout}>C H E C K O U T</button>
                    <button onClick={deleteItem}>D E L E T E</button>
                </div>
            </div>
            
        )
    }






}