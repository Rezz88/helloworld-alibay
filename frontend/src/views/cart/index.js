import React, { Component } from 'react';
import '../../App.css';
import Usercart from './usercart'

export class Cart extends Component {
    constructor()   {
        super()
        this.state = { products: []}

    }

    componentDidMount() {
        const mockCart = [
            {prodId: 1,
                name: 'car',
                descr: 'description of car',
                price: '$1000',
                image: 'image of car',
                sellerId: 'John'}
            ]
            this.setState({products: mockCart})
    }

    renderProducts = () => {
        const { products } = this.state
        if (products)    {
            return products.map(product=>{
                return <Usercart
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
            return <div>nothing</div>
        }
    }

    checkout = (item) =>  {
        //pass whole item to backend to proceed to checkout
        // fetch("/fav", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        this.setState({products: []})// 
        console.log('checkout', item);
    }
    deleteItem = (item) =>  {
        //need to update backend to remove an item from cart
        // fetch("/fav", {
        //     method: "POST",
        //     body: JSON.stringify(item),
        //   })
        this.setState({products: []})// 
        console.log('deleteItem', item);
    }



    render() {
        return  (
            <div className='App'>
                <div>
                    C A R T
                </div>
                
                <div>
                    {this.renderProducts()}
                </div>
            </div>
        )

    }

}
export default Cart;