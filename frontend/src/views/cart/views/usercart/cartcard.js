import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';

export default class Cartcard extends Component {


    render() {
        const{ seller ,title ,price, productID, description, deleteItem} = this.props// de-structuring shit from perks
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
                    {'title: '+title}
                </div>
                <div>
                    {'$ '+price}
                </div>
                <div>
                    <button className="button" onClick={deleteItem}>D E L E T E</button>
                </div>
            </div>
            
        )
    }






}