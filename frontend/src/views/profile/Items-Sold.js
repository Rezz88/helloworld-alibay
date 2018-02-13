import React, { Component } from 'react';
import '../../App.css';

export class ItemSold extends Component {
    constructor () {
        super();
        this.state = { products: [] }
    }

       
    // renderProducts = () => {
    //     const { products } = this.state
    //     if (products.length) {
    //         return products.map(product => {
    //             return <SoldItem
    //                 name={product.name}
    //                 image={product.image}
    //                 description={product.descr}
    //                 prodId={product.prodid}
    //                 key={product.prodid}
    //                 // addToBag={this.addToBag}
    //                 // addToFav={() => this.addToFav(product.prodid)}
    //             />
    //         })
    //     } else {
    //         return <div>nothing</div>
    //     }
    // }

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
    
    render() {
        // const{ image, name, description, addToBag, prodId, addToFav} = this.state.products
        return (<div className="sold-item">
            <div>Image
                {this.state.products.image}
            </div>
            <div>Name
                {this.state.products.name}
            </div>
            <div>Description
                {this.state.products.description}
            </div>
        </div>
        )
    }
}
export default ItemSold;
