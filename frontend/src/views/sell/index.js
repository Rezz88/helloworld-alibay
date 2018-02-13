import React, { Component } from 'react';
import '../../App.css';

export class Sell extends Component {
    constructor() {
        super();
        this.state = { formCompleted: false, name: '', description: '', price: '' }
    }

    setInputValue = (key, value) => {
        this.setState({ [key]: value })
    }

    render() {
        const { name, description, price } = this.state
        return (
            <div>
                <form>
                    <input className="itemName" placeholder="Item Name" value={name} onChange={(e) => this.setInputValue('name', e.target.value)}></input>
                    <input className="itemDescription" placeholder="Description" value={description} onChange={(e) => this.setInputValue('description', e.target.value)}></input>
                    <input className="price" type="number" placeholder="Price" value={price} onChange={(e) => this.setInputValue('price', e.target.value)}></input> 
                    <button onClick={this.props.addItem(name, description, price)}>Sell Item!</button>
                </form>
            </div>
        )
    }
}

//add numbers only for the price input

// name={product.name}
// image= {product.image}
// description = {product.descr}
// prodId= {product.prodid}
// key= {product.prodid}
// addToBag={this.addToBag}
// addToFav={()=>this.addToFav(product.prodid)}