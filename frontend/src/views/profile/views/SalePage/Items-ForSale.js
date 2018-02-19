import React, { Component } from 'react';
import '../../../../App.css';
import '../../../../grid.css';

export class ForSale extends Component {

    render() {
        const { seller, price, title, blurb, deleteItem, imageName } = this.props// De-structuring
        return (
            <div>
                <div className='sold-item'>
                    <div>
                        <img src={imageName} alt='Product' className='imageDiv' />
                    </div>
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

export default ForSale;