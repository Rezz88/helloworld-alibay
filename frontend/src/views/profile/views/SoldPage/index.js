import React, { Component } from 'react';
import '../../../../App.css';
import SoldItem from './Items-Sold'

class SoldItemPage extends Component {
    constructor()   {
        super()
        this.state = { products: [] }

    }

    //Temp mockdata for testing
    componentDidMount(){
        const mockproducts = [
            {prodid: 1,
                name: 'car',
                descr: 'description of car',
                image: 'img of car'},
            {prodid: 2,
                name: 'boat',
                descr: 'description of boat',
                image: 'img of boat'},
            {prodid: 3,
                name: 'shoes',
                descr: 'description of shoes',
                image: 'img of shoes'}
        ]
        this.setState({ products: mockproducts })
    };

    renderProducts = () => {
        const { products } = this.state
        if (products.length) {
            return products.map(product => {
                return <SoldItem
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

export default SoldItemPage;