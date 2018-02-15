import React, { Component } from 'react';
import '../../../../App.css';

export class SoldItem extends Component {
    
    soldItem = () => {
    // fetch("")
    //     .then(x=> x.text())
    //     .then(y=> JSON.parse(y))
    //     .then(lst=> this.setState({ products: lst}))
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
                <h3>Items Sold</h3>
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
                    <button onClick={this.removeSale}>Remove</button>
                </div>    
            </div>
            </div>
        )
    }
} 

export default SoldItem;