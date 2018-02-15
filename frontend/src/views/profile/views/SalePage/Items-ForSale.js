import React, { Component } from 'react';
import '../../../../App.css';

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

    componentDidMount() {
          // fetch(""), {
        //     method: 'post',
        //     body: JSON.stringify({
        //     })
        // }
        this.setState({})
    }


    render() {
        const{ image, price, name, description} = this.props// De-tructuring
        return (
            <div>
                <h3>Items for Sale</h3>
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
                <div className="remove-button">
                    <button onClick={this.remove}>Remove</button>
                </div>    
            </div>
            </div>
        )
    }
} 

export default ForSale;