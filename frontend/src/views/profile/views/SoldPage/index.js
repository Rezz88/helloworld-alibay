import React, { Component } from 'react';
import '../../../../App.css';
import SoldItem from './Items-Sold'

class SoldItemPage extends Component {
    constructor() {
        super()
        this.state = { 
            products: [],
            username: ""
         }
    };

    componentWillMount() {
        this.setState({ username: this.props.username });
    };

    componentDidMount() {
        console.log("ForSalePage test -", this.state.username)
        fetch("/profile", {
            method: 'post',
            body: JSON.stringify({ username: this.state.username })
        })
            .then(x => x.text())
            .then(y => JSON.parse(y))
            .then(items =>items.itemsSold)
            .then(z=> {this.setState({products: z})})
    };
    

    renderProducts = () => {
        console.log("Current issue - ", this.state.products)
        const { products } = this.state
        if (products.length) {
            return products.map(item => {
                return <SoldItem
                    seller={item.seller}
                    productID={item.productID}
                    price={item.price}
                    blurb={item.blurb}
                    category={item.category}
                    title={item.title}
                />
            })
        } else {
            return <h4>Products</h4>
        }
    };

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
    };


    render() {
        return (
            <div>
                <div>{this.renderProducts()}</div>
            </div>

        )
    }
}

export default SoldItemPage;