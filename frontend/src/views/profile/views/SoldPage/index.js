import React, { Component } from 'react';
import '../../../../App.css';
import SoldItem from './Items-Sold'

class SoldItemPage extends Component {
    constructor() {
        super()
        this.state = { products: [] }

    }

    //Temp mockdata for testing
    componentDidMount() {
        const mockproducts = [
            {
                prodid: 1,
                name: 'car',
                descr: 'description of car',
                image: 'img of car'
            },
            {prodid: 2,
                name: 'boat',
                descr: 'description of boat',
                image: 'img of boat'
            },
            {prodid: 3,
                name: 'shoes',
                descr: 'description of shoes',
                image: 'img of shoes'
            }
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
                    deleteItem={() => this.deleteItem(product)}
                // Currently not required for profile
                // addToBag={this.addToBag}
                // addToFav={() => this.addToFav(product.prodid)}
                />
            })
        } else {
            return <h4>Nothing sold...</h4>
        }
    }

    deleteItem = (item) => {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //need to update backend to remove an item from cart
        // fetch("/delete", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })

        let newArray = this.state.products
        let productsRemoved = newArray.filter(function (el) {
            return el.name !== item.name;
        });

        console.log('new array =', productsRemoved);
        console.log('old array =', this.state.products)

        this.setState({ products: productsRemoved })// 
        console.log(' delete this item only =', item)
    }


    render() {
        return (
            <div>
                <div>{this.renderProducts()}</div>
            </div>

        )
    }
}

export default SoldItemPage;