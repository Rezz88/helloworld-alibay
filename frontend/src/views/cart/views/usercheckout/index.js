import React, { Component } from 'react';
import '../../../../App.css';
import Checkoutcard from './checkoutcard'

export class Checkoutindex extends Component {
    constructor()   {
        super()
        this.state = { products: []}

    }

    componentDidMount() {
        //fetch items from backend uncomment when backend is ready
        // fetch("/checkout")
        // .then(x=> x.text())
        // .then(y=> JSON.parse(y))
        // .then(lst=> this.setState({ products: lst}))

        const mockCart = [
            {prodId: 1,
                name: 'car //  mock data',
                descr: 'description of car is mock data',
                price: 1000,
                image: 'image of car',
                sellerId: 'John'},
            {prodId: 2,
                name: 'boat //  mock data',
                descr: 'description of boat',
                price: 2000,
                image: 'image of boat',
                sellerId: 'barb'}
            ]
            this.setState({products: mockCart})
    }

    renderProducts = () => {
        const { products } = this.state
        if (products)    {
            return products.map(product=>{
                return <Checkoutcard
                // plus whatever else we get from the backend
                    name={product.name}
                    image= {product.image}
                    description= {product.descr}
                    sellerId= {product.seller}
                    prodId= {product.prodId}
                    key= {product.prodId}
                    price= {product.price}
                    // addToBag={this.addToBag}// more limited than addToFav below, works to send one props(propId)
                    checkout={()=>this.checkout(product)}
                    deleteItem={()=>this.deleteItem(product)}
                />
            })
        } else {
            return <div>you have no items</div>
        }
    }
    renderPrice = () => {
        const {products} = this.state
        
        if (products)   {
            var total = 0
        for (var i = 0; i < products.length; i++)   {
            total += products[i].price
        }
        return total}
        else {
            return <div>$0.00</div>
        }
    }

    deleteItem = (item) =>  {
        //pass username into the item with clickfunction
        item.username = this.props.username
        //need to update backend to remove an item from cart
        // fetch("/delete", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        
        let newArray = this.state.products
        let productsRemoved = newArray.filter(function(el) {
        return el.name !== item.name;  
        });

        console.log('new array =', productsRemoved);
        console.log('old array =', this.state.products)

        this.setState({products: productsRemoved})// 
        console.log(' delete this item only =' ,item)
        
    }



    render() {
        return  (
            <div className='App'>
                <div>
                    Items in checkout: {this.state.products.length} 
                </div>
                
                <div>
                    {this.renderProducts()}
                </div>
                <div>
                    {' YOUR TOTAL IS $'+this.renderPrice()}
                </div>
                <div>
                    <button onClick={this.deleteItem}>B U Y</button>
                </div>
            </div>
        )

    }

}
