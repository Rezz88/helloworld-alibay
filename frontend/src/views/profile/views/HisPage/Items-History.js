import React, { Component } from 'react';
import '../../../../App.css';

export class HistoryItem extends Component {

    render() {
        const { seller, price, title, blurb, deleteItem } = this.props// De-structuring
        return (
            <div>
                <h3>Items Bought</h3>
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
export default HistoryItem;
