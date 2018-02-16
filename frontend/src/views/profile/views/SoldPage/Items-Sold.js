import React, { Component } from 'react';
import '../../../../App.css';

export class SoldItem extends Component {

    render() {
        const { seller, price, title, blurb, deleteItem } = this.props// De-structuring
        return (
            <div>
                <h3>Items Sold</h3>
                <div className='sold-item'>
                    <div>
                        {title}
                    </div>
                    <div>
                        {blurb}
                    </div>
                    <div>
                        {seller}
                    </div>
                    <div>
                        {price}
                    </div>
                    <div className="remove-button">
                        <button className="button" onClick={deleteItem}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SoldItem;