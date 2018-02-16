import React, { Component } from 'react';
import '../../../../App.css';

export class HistoryItem extends Component {

    historyItem = () => {
        // fetch("")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))
    }

    render() {
        const { image, price, name, description } = this.props// de-structuring shit from perks
        return (
            <div>
                <h3>History</h3>
                <div className='sold-item'>
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
                </div>
            </div>
        )
    }
}
export default HistoryItem;
