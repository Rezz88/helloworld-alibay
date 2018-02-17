import React, { Component } from 'react';
import '../../../../App.css';

export class HistoryItem extends Component {

    render() {
        const { seller, price, title, blurb} = this.props// De-structuring
        return (
            <div>
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
                </div>
            </div>
        )
    }
}
export default HistoryItem;
