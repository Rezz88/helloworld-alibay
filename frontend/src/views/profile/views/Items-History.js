import React, { Component } from 'react';
import '../../../App.css';

export class HistoryItem extends Component {

    historyItem = () => {
        // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     })
        // }
        // .then(x => x.json())
        // .then(console.log(x))   
    }

    render() {
        const{ image, price, name, description} = this.props// de-structuring shit from perks
        return (
            <div>
                <h3>History</h3>
            <div className='sold-item'>
                <div>Image
                    {/* {this.historyItem} */}
                    {image}
                </div>
                <div>Name
                    {name}
                </div>
                <div>Discription
                    {description}
                </div>
                <div>Price
                    {price}
                </div>
            </div>
            </div>
        )
    }
} 
export default HistoryItem;