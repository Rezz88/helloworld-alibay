import React, { Component } from 'react';
import '../../../App.css';

export class ForSale extends Component {

    saleItem = () => {
    // fetch("")
    //     .then(x=> x.text())
    //     .then(y=> JSON.parse(y))
    //     .then(lst=> this.setState({ products: lst}))
    }

    removeSale = (item) =>  {
        //Need to update backend to remove an item from favoirte page
        // fetch("", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        this.setState({products: []})// 
        console.log('deleteItem', item);
    }

    render() {
        const{ image, price, name, description} = this.props// de-structuring shit from perks
        return (
            <div>
                <h3>Items for Sale</h3>
            <div className='sold-item'>
                <div>Image
                    {/* {this.forSale} */}
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
                    <button onClick={this.removeSale}>Remove</button>
                </div>    
            </div>
            </div>
        )
    }
} 

export default ForSale;