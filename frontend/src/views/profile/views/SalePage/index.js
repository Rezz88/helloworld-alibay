import React, { Component } from 'react';
import '../../../../App.css';
import ForSale from './Items-ForSale'

class ForSalePage extends Component {
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
            .then(items =>items.itemsForSale)
            .then(z=> {this.setState({products: z})})
    };
    
    renderProducts = () => {
        console.log("Current issue - ", this.state.products)
        const { products } = this.state
        if (products) {
            return products.map(item => {
                return <ForSale
                    seller={item.seller}
                    productID={item.productID}
                    price={item.price}
                    blurb={item.blurb}
                    category={item.category}
                    title={item.title}
                    deleteItem={() => this.deleteItem(item)}
                />
            })
        } else {
            return <h4>No Products</h4>
        }
    };

    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //pass id's to backend to store in cart uncomment when backend is ready
        fetch("/deleteItem", {
            method: "POST",
            body: JSON.stringify(item),
          })
          let oldArr = this.state.products;
          let newArr = oldArr.filter(function(x) {
              return x.productID !== item.productID;
          })
          this.setState({ products: this.newArr})
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst }))
        this.componentDidMount()
    };

    render() {
        return (
            <div><h3>Items for Sale</h3>
                <div>{this.renderProducts()}</div>
            </div>

        )
    }
}

export default ForSalePage;