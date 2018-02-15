import React, { Component } from 'react';
import '../../../../App.css';
import HistoryItem from './Items-History'

class HisItemPage extends Component {
    constructor()   {
        super()
        this.state = { products: [] }

    }

    //Temp mockdata for testing
    componentDidMount(){
        const mockproducts = [
            {prodid: 3,
                name: 'Bike',
                descr: 'description of bike',
                image: 'img of bike'}
        ]
        this.setState({ products: mockproducts })
    };

    renderProducts = () => {
        const { products } = this.state
        if (products.length) {
            return products.map(product => {
                return <HistoryItem
                    name={product.name}
                    image={product.image}
                    description={product.descr}
                    prodId={product.prodId}
                    key={product.prodId}
                    // Currently not required for profile
                    // addToBag={this.addToBag}
                    // addToFav={() => this.addToFav(product.prodid)}
                />
            })
        } else {
            return <div>Nothing</div>
        }
    }

    render () {
        return (
            <div>
                <div>{this.renderProducts()}</div>
            </div>
            
        )
    }
}

export default HisItemPage;