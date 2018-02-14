import React, { Component } from 'react';
import '../../../App.css';

export class ForSale extends Component {



    saleItem = () => {
        // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     })
        // }
        // .then(x => x.json())
        // .then(console.log(x))   

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

    componentDidMount() {
          // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     })
        // }
        this.setState({})
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