import React, { Component } from 'react';
import '../../App.css';

export class FavItem extends Component {

    favItem = () => {
        // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     username: user,
        //     email: mail
        //     })
        // }
        // .then(x => x.json())
        // .then(console.log(x))   
    }

    render() {
        const{ image, price, name, description} = this.props// de-structuring shit from perks
        return (
            <div>
                <h3>Favorite item Page</h3>
            <div className='sold-item'>
                <div>Image
                    {/* {this.favItem} */}
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
                <div className="remove-button">
                    <button onClick={this.removeFav}>Remove</button>
                </div>    
            </div>
            </div>
        )
    }
}   
export default FavItem;
